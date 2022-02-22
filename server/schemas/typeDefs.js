const { gql } = require('apollo-server-express')


const typeDefs = gql`

    type User {
        _id: ID!
        userName: String!
        firstName: String
        lastName: String
        email: String!
        password: String!
        profilePic: String
        aboutMe: String
        GithubLink: String
        TwitterLink: String
        hashNodeLink: String
        linkedinLink: String
        groupMemberOf: [Group]
        isAdmin: Group
        skills: [SkillSet]
    }
    type Auth {
        token: ID!
        user: User
    }

    type Group {
        _id: ID!
        groupName: String
        techNeeded: [SkillSet]
        profilePic: String
        aboutGroup: String
        category: String
        adminId: String
        groupMembers: [User]
    }
    
    type GroupPost {
        _id: ID!
        postCreator: String!
        postDate: String!
        postContent: String!
        postOrigin: String!
    }
    type Reply {
        op: String!
        author: String!
        body: String!
        Date: String
    }

    type SkillSet {
        _id: ID!
        name: String!
        discipline: [String!]
    }
    

    input newUserInput {
        _id: ID!
        userName: String!
        firstName: String
        lastName: String
        email: String!
        password: String!
        profilePic: String
        aboutMe: String
        GithubLink: String
        TwitterLink: String
        hashNodeLink: String
        linkedinLink: String
    }

    input UpdatedUser {
        _id: ID!
        firstName: String
        lastName: String
        userName: String
        email: String
        password: String
        profilePic: String
        aboutMe: String
        GithubLink: String
        TwitterLink: String
        hashNodeLink: String
        linkedinLink: String
    }


    type Query {
        me(_id: ID!): User
        getOneGroup(_id: ID!) : Group
        getAllGroups : [Group]
        getSkills(skill: String!): [SkillSet]
        getOneSkill(skill: String!) : SkillSet
    }

    type Mutation {
        createUser(userName: String!, password: String!, email: String!) : Auth
        login(email: String!, password: String!): Auth
        updateUser(user: UpdatedUser): User
        createGroup(groupName: String!, techNeeded: [String], profilePic: String, aboutGroup: String!, category: String!, adminId: String!): Group
        updateUserSkills(userId: ID!, skill: [ID!]) : User
    }
`
module.exports = typeDefs