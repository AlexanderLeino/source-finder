const { AuthenticationError } = require('apollo-server-express');
const { User, Group, GroupPost, Replies, SkillSet } = require('../models')

const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, { _id }) => {
            const user = await User.findById(_id).populate([{
                path: 'groupMemberOf',
                model: 'Group'
            },
            {
                path: 'skills',
                model:'SkillSet'
            }
            ])
            return user
        },
        getOneGroup: async (parent, _id) => {
            const group = await Group.findOne({_id}).populate([{
                path: 'groupMembers',
                model: 'User'
            },
            {
                path: 'techNeeded',
                model:'SkillSet'
            }
        ])
            return group
        },
        getAllGroups: async (parent, _) => {
            const allGroups = await Group.find()
            return allGroups
        },
        getSkills: async (parent, skillSet) => {
            let destructuredSkill = skillSet.skill
            const skillBubbles = await SkillSet.find({
                discipline: {$in: destructuredSkill}
            })
            return skillBubbles
        },
        getOneSkill: async (parent, skillName) => {
            const { skill } = skillName
            let foundSkill = await SkillSet.findOne({name:skill})

            return foundSkill
        }
        
    },
    Mutation: {
        createUser: async (parent, args) => {
            try {
                const user = await User.create(args)
                const token = signToken(user)
                return { user, token }

            } catch (err) {
                console.log(err)
                return err
            }
        },
        login: async (parent, { email, password }) => {
            try {
                const user = await User.findOne({ email })

                if (!user) {
                    throw new AuthenticationError('No Profile with that email')
                }

                const correctPw = await user.isCorrectPassword(password)

                if (!correctPw) {
                    throw new AuthenticationError('Incorrect password!');
                }
                const token = signToken(user)
                return { token, user }
            } catch (err) {
                console.log(err)
            }
        },
        updateUser: async (parent, { user }) => {
            console.log('I')
            const updatedUser = await User.findByIdAndUpdate(user._id, {
                $set: {
                    ...user
                }
            }, {
                new: true
            })
            return updatedUser
            // return updatedUser.populate([
            //     {
                    
            //     }
            // ])
        },
        createGroup: async (parent, args) => {
            try{
                console.log(args)
                const group = await Group.create(args)
                return group
            } catch (err){
                console.log(err)
                return err
            }
        },

        updateUserSkills: async (parent, {userId, skill}) => {
            try {
                const updatedUser = await User.findByIdAndUpdate(userId,{
                    $push: { skills: skill }
                }).populate([{
                    model: 'SkillSet',
                    path: 'skills'
                }])
                return updatedUser
            } catch(err){
                console.log(err)
            }
        }
       
    }
}

module.exports = resolvers