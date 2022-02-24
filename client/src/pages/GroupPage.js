import React, {useState, useEffect} from 'react'
import { Typography , Grid, Box, Container, List, ListItem, ListItemText } from '@mui/material'
import humanCoding from '../images/human-coding.png'
import Modal from '@mui/material/Modal';
import { useQuery } from '@apollo/client'

import { storage } from '../firebase'
import { app } from '../firebase'
import { GET_ONE_GROUP } from '../utils/queries'
import Auth from '../utils/auth'

import RequestJoin from '../components/ReqestJoin';


//style for modal
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#bf4578',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

const GroupPage=() =>{
    let isIn = false
    const user = Auth.getProfile()
    const [groupInfo, setGroupInfo] = useState([])
    let groupMates
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const {loading, error, data} = useQuery(GET_ONE_GROUP, {
        variables: {
            id: "62154933864f48fe07ca12d6"
        }
    })

    if (data != null){
        groupMates = data.getOneGroup.groupMembers

        for (let i = 0; i < groupMates.length; i++){
            console.log(groupMates)
            if (groupMates[i].userName === user.data.userName){
                isIn = true
                break
            }
        }
    }
    
   
    
    useEffect(() => {
        setGroupInfo(groupData)
        console.log(groupInfo)
    },[!loading])


    const groupData = data ? data.getOneGroup : []
    
    
    
    const SubmitJoin = () => {
        if (user.data != null) {
            //do the modal update here
            const joinMessage = {
                userName: user.data.userName
            }

            console.log(joinMessage)
        }
        else{
            //Open the login Modal here
        }
    }

    return(
        <>
        <Container>
            <h2 style={{textAlign: 'center'}}>{groupInfo.groupName}</h2>
        </Container>

        {isIn ? (<div></div>) : (<button onClick={handleOpen}>Request To Join</button>)}

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








        
      
        {loading ? ( <div></div>) : (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
            <RequestJoin userData = {user} groupData = {data.getOneGroup}/>
        </Box>
      </Modal>)}
        

        </>
    )

}

export default GroupPage