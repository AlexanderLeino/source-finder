
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