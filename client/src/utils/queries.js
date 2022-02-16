
import { gql } from '@apollo/client';

export const GET_ALL_GROUPS = gql `
    query GetAllGroups {

    }
`

// export const GET_GROUP = gql `
//     query GetOneGroup($groupName: groupName){
//         getOneGroup(groupname: $groupName){
//             aboutGroup
//         }
//     }
// `