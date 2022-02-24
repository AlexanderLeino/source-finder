import React, {useState, useEffect} from 'react'
import { Typography , Grid, Box, Container, List, ListItem, ListItemText } from '@mui/material'
import humanCoding from '../images/human-coding.png'

import { useQuery } from '@apollo/client'

import { storage } from '../firebase'
import { app } from '../firebase'
import { GET_ONE_GROUP } from '../utils/queries'

const db = app.firestore()

const GroupPage=() =>{
    const [groupInfo, setGroupInfo] = useState([])

    const {loading, error, data} = useQuery(GET_ONE_GROUP, {
        variables: {
            id: "62154933864f48fe07ca12d6"
        }
    })
    
   
    
    useEffect(() => {
        setGroupInfo(groupData)
        console.log(groupInfo)
    },[!loading])


    const groupData = data ? data.getOneGroup : []
    
    
    
    console.log(groupInfo)

    return(
        <>
        <Container>
            <h2 style={{textAlign: 'center'}}>{groupInfo.groupName}</h2>
        </Container>

        <Grid container  mt={2}>
            <Grid item xs={4} style={{border: '1px solid black', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <Container maxWidth='xs' style={{border:'1px solid black', background:'white', marginTop:'2rem'}}>
                    {/* <Typography variant='h5' style={{textAlign:'center'}}>Current Needs</Typography> */}
                    <img src={groupData.profilePic}></img>
                </Container>
                <Container>

                </Container>
            </Grid>

            <Grid item xs={8} style={{border:'1px solid black'}}>
            
            </Grid>
        </Grid>
        
        <Grid lg='4'>
            <Box>
                <h2>Group Members</h2>
            </Box>
            { loading ? (
                <div></div>
            ) : (
                 <Box>
                 {/* {groupInfo.groupMembers.map(user => {
                     <p>user.userName</p>
                 })} */}
                 </Box>
            )
               
            }
            
        </Grid>
        <Grid lg='4'>
           
        </Grid>

        </>
    )

}

export default GroupPage