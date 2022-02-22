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
    
    const groupData = data ? data.getOneGroup : []
    
    useEffect(() => {
        setGroupInfo(groupData)
    },[loading])
    
    
    
    console.log(groupInfo.groupName)

   

    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);

    
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

    return(
        <>
        <Container>
            <h2 style={{textAlign: 'center'}}>{groupInfo.groupName}</h2>
        </Container>

        <Grid container  mt={2}>
            <Grid item xs={4} style={{border: '1px solid black', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <Container maxWidth='xs' style={{border:'1px solid black', background:'white', marginTop:'2rem'}}>
                    <Typography variant='h5' style={{textAlign:'center'}}>Current Needs</Typography>
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
        </Grid>
        <Grid lg='4'>
            <Box>
                <input type='file' onChange={handleChange} />
                <button onClick={handleUpload}>upload</button>
            </Box>
        </Grid>
        <img src='https://firebasestorage.googleapis.com/v0/b/sourcefinder-969bf.appspot.com/o/images%2F400.png?alt=media&token=c445b35e-e3e0-4f3b-81fb-2f101e636545'></img>
        </>
    )

}

export default GroupPage