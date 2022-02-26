import React, {useState, useEffect} from 'react'
import { Typography , Grid, Box, Container, List, ListItem, ListItemText } from '@mui/material'
import humanCoding from '../images/human-coding.png'
import Modal from '@mui/material/Modal';
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom';
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
    let groupMates
    const user = Auth.getProfile()

    const { id } = useParams()

    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const {loading, error, data} = useQuery(GET_ONE_GROUP, {
        variables: {
            id
        }
    })
    const groupData = data ? data.getOneGroup : []
    
    const [groupInfo, setGroupInfo] = useState([])
    const [techNeeded, setTechNeeded] = useState([])
    const [groupMembers, setGroupMembers] = useState([])
    
    if (data != null){
        groupMates = data.getOneGroup.groupMembers

        for (let i = 0; i < groupMates.length; i++){
           
            if (groupMates[i].userName === user.data.userName){
                isIn = true
                break
            }
        }
    }
    
    useEffect(() => {
        setGroupInfo(groupData)
        console.log(groupInfo)
    },[groupData])

    useEffect(() => {
        let techData = groupInfo.techNeeded
        setTechNeeded(techData)
    },[groupInfo])

    useEffect(() => {
        let groupMembers = groupInfo.groupMembers
        console.log(groupMembers)
    },[groupInfo])

    return(<>
                <Container>
            <Typography variant='h1' style={{textAlign: 'center'}}>{groupInfo.groupName === undefined ? '' : groupInfo.groupName}</Typography>
        </Container>
<Container maxWidth='lg'>
{isIn ? (<div></div>) : (<button onClick={handleOpen}>Request To Join</button>)}

        <Grid container mt={2}>
            <Grid item xs={2} style={{border: '1px solid black'}}>
                <Container style={{border:'1px solid black', background:'white', maxWidth:'fit-content', display:'flex', margin:'1rem'}}>
                    <Typography variant='h5' style={{textAlign:'center'}}>Current Needs</Typography>
                </Container>

                <Container>
                    <List style={{textAlign:'center'}}>
                        {techNeeded === undefined ? [] : techNeeded.map((tech, index) => {
                        return <>
                            <ListItem style={{textAlign: 'center'}}>
                                <ListItemText>{tech.name}</ListItemText>
                            </ListItem>
                            </>
                        })}
                    </List>
                </Container>
            </Grid>
            <Grid item xs={10}>
                <Container maxWidth='sm' style={{border:'2px solid black'}}>
                    <Typography>Hello</Typography>
                </Container>
        </Grid>
</Grid>
</Container>
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