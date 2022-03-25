import React, {useState, useEffect} from 'react'
import { Typography , Grid, Box, Container, List, ListItem, ListItemText, Button } from '@mui/material'
import humanCoding from '../images/human-coding.png'
import Modal from '@mui/material/Modal';
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom';
import { storage } from '../firebase'
import { app } from '../firebase'
import { GET_ONE_GROUP } from '../utils/queries'
import Auth from '../utils/auth'
import './GroupPage.css'
import ColorTabs from '../components/Tabs';
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
  

const GroupPage = () =>{
    
    
    
    
    console.log()
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
                <Container maxWidth='100%' className='spacer3 layer3'>
            <Typography variant='h1' style={{textAlign: 'center'}}>{groupInfo.groupName === undefined ? '' : groupInfo.groupName}</Typography>
<Container maxWidth='lg'>
        <Grid container mt={2}>
            <Grid item xs={4} style={{backgroundColor:'#ffffffb5', borderRadius:'25px', border:'3px solid purple', padding:'.5rem' , boxShadow:'7px 5px 5px purple'}}>
                <Container style={{ whiteSpace:'nowrap',  maxWidth:'max-content', display:'flex',justifyContent:'center', borderRadius:'25px', backgroundColor:'transparent' }}>
                    <h5 style={{textAlign:'center', fontWeight:'bold', fontSize:'40px', color:'#190b28'}}>Help Wanted</h5>
                </Container>

                <Container style={{ display:'flex' ,justifyContent:'center', flexDirection:'column', marginTop:'.5rem'}}>
                    <ul style={{textAlign:'center' ,listStyle:'none', lineHeight:'3rem', fontSize:'1.55rem'}} >
                        {techNeeded === undefined ? [] : techNeeded.map((tech, index) => {
                            return <>
                           
                                <li style={{textAlign: 'center',}} >{tech.name}</li>
                            
                            </>
                        })}
                    </ul>
                    {isIn ? (<div></div>) : (<Button style={{backgroundColor:'purple', fontSize:'1rem'}} variant='contained' onClick={handleOpen}>Request To Join</Button>)}
                </Container>
            </Grid>
            <Grid item xs={8}>
                <Container maxWidth='sm' style={{backgroundColor:'#ffffffb5', borderRadius:'25px', border:'3px solid purple', padding:'.5rem', boxShadow:'7px 5px 5px purple'}}>
                    <Typography variant='h5' style={{textAlign:'center', fontColor:'#190b28', fontSize:'40px', fontWeight:'bold'}}>About Us</Typography>
                    <Typography style={{textAlign:'center', fontColor:'#190b28', fontSize:'20px', marginTop:'10px'}}>{groupInfo.aboutGroup}</Typography>
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
    <Container maxWidth='md' style={{marginTop:'2.25rem'}}>
        <ColorTabs center/>
    </Container>
</Container>
        </>
    )

}

export default GroupPage