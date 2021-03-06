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

    type Request {
        _id: ID!
        requestUser: ID!
        requestUserName: String
        postContent: String
        portfolioLink: String
        requestOrigin: String!
        skill: String
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
        isAdmin: ID!
    }


    type Query {
        me(_id: ID!): User
        getOneGroup(_id: ID!) : Group
        getAllGroups : [Group]
        getSkills(skill: String!): [SkillSet]
        getOneSkill(skill: String!) : SkillSet
        getMyRequests(requestOrigin: String!): [Request]
    }

    type Mutation {
        createUser(userName: String!, password: String!, email: String!) : Auth
        login(email: String!, password: String!): Auth
        updateUser(user: UpdatedUser): User
        createGroup(groupName: String!, techNeeded: [ID!], profilePic: String, aboutGroup: String!, category: String!, adminId: String!): Group
        updateUserSkills(userId: ID!, skill: [ID!]) : User
        joinRequest(requestUser: ID!, requestUserName: String, postContent: String, portfolioLink: String, requestOrigin: String!, skill: String) : Request

    }
`
module.exports = typeDefs