import React, {useState, useEffect} from 'react'
import { Typography , Grid, Box, Container, List, ListItem, ListItemText } from '@mui/material'
import humanCoding from '../images/human-coding.png'

import { useQuery } from '@apollo/client'

import { storage } from '../firebase'
import { app } from '../firebase'
import { GET_ONE_GROUP } from '../utils/queries'

const db = app.firestore()

const GroupPage=() =>{
    const {loading, error, data} = useQuery(GET_ONE_GROUP, {
        variables: {
            id: "62154933864f48fe07ca12d6"
        }
    })
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    
    
    
    const groupData = data ? data.getOneGroup : []
    
    const [groupInfo, setGroupInfo] = useState([])
    const [techNeeded, setTechNeeded] = useState([])
    

    useEffect(() => {
        setGroupInfo(groupData)
        
    },[groupData])

    useEffect(() => {
        let techData = groupInfo.techNeeded
        setTechNeeded(techData)
    },[groupInfo])
    
    console.log(techNeeded)
    
    const handleChange = e => {
        if (e.target.files[0]) {
        setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
        "state_changed",
        snapshot => {
            const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
        },
        error => {
            console.log(error);
        },
        () => {
            storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
                //save the url variable to the backend and that url will be the reference for the image
                setUrl(url);
            });
        }
        );
    };
    // storage.ref('images').child('400.png').getDownloadURL().then(url => {
    //     console.log(url)
    //     setUrl(url);})

    return(<>
        <Container>
            <Typography variant='h1' style={{textAlign: 'center'}}>{groupInfo.groupName === undefined ? '' : groupInfo.groupName}</Typography>
        </Container>
<Container maxWidth='lg'>


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
        
        {/* <Grid lg='4'>
            <Box>
                <h2>Group Members</h2>
            </Box>
        </Grid>
        <Grid lg='4'>
            <Box>
                <input type='file' onChange={handleChange} />
                <button onClick={handleUpload}>upload</button>
            </Box>
        </Grid>
        <img src='https://firebasestorage.googleapis.com/v0/b/sourcefinder-969bf.appspot.com/o/images%2F400.png?alt=media&token=c445b35e-e3e0-4f3b-81fb-2f101e636545'></img> */}
        </>
    )

}

export default GroupPage