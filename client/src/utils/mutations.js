import { gql } from '@apollo/client'
export const CREATE_USER = gql`
    mutation CreateUser($userName: String!, $email: String!, $password: String!) {
        createUser(userName: $userName, email: $email, password: $password) {
        token
        user{
            userName
        }
    }
}
`

export const LOG_IN = gql`
    mutation LogIn($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                userName
            }
        }
    }
`

export const UPDATE_USER = gql`
    mutation UpdateUser($user: UpdatedUser) {
        updateUser(user: $user) {
            _id
            firstName
            lastName
            userName
            email
            password
            profilePic
            aboutMe
            GithubLink
            TwitterLink
            hashNodeLink
            linkedinLink
            isAdmin{
                _id
            }
    }
}
`
export const UPDATE_USER_SKILLS = gql`
    mutation UpdateUserSkills($userId: ID!, $skill: [ID!]){
        updateUserSkills(userId: $userId, skill: $skill){
            userName
            skills {
                _id
                name
            }
        }
    }
`

export const CREATE_GROUP = gql`
mutation CreateGroup($groupName: String!, $aboutGroup: String!, $category: String!, $adminId: String!, $techNeeded: [ID!], $profilePic: String) {
    createGroup(groupName: $groupName, aboutGroup: $aboutGroup, category: $category, adminId: $adminId, techNeeded: $techNeeded, profilePic: $profilePic ){
            _id
            groupName
            techNeeded{
                _id
            }
            aboutGroup
            category
            adminId
            profilePic
        } 
    }
`

export const CREATE_REQUEST = gql `
    mutation Request($requestUser: ID!, $requestUserName: String, $postContent: String, $portfolioLink: String, $requestOrigin: String!, $skill: String){
        joinRequest(requestUser: $requestUser, requestUserName: $requestUserName, postContent: $postContent, portfolioLink: $portfolioLink, requestOrigin: $requestOrigin, skill: $skill ){
            requestUser
            requestUserName
            postContent
            portfolioLink
            requestOrigin
            skill
        }
    }
`