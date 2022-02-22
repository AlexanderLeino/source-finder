
import { gql } from '@apollo/client';

// export const GET_ALL_GROUPS = gql `
//     query GetAllGroups {

//     }
// `

// export const GET_GROUP = gql `
//     query GetOneGroup($groupName: groupName){
//         getOneGroup(groupname: $groupName){
//             aboutGroup
//         }
//     }
// `

export const GET_ME = gql `
    query Me($id: ID!){
        me(_id: $id){
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
            groupMemberOf {
                _id
                groupName
            }
        }
    }
`
export const Get_Skills = gql`
    query GetSkills($skill: String!){
        getSkills(skill: $skill){
            _id
            name
            
        }
    }
`

export const GET_ONE_GROUP = gql`
    query GetOneGroup($id: ID!){
        getOneGroup(_id: $id){
            groupName
            techNeeded {
                _id
                name
            }
            aboutGroup
            category
            profilePic
            adminId
            groupMembers{
                userName
                profilePic
                GithubLink
                TwitterLink
                hashNodeLink
                linkedinLink
            }
        }
    }
`