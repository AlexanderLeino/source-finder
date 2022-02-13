import React, {useState} from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import humanCoding from '../images/human-coding.png'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import { storage } from '../firebase'
import { app } from '../firebase'

const db = app.firestore()

const GroupPage=() =>{

    const fetchImg = async () => {
        const collections = await db.collection('images').get()

        console.log(collections.docs.map((doc) => {
            return doc.data()
        }))
    }

    //fetchImg()
    console.log(storage.ref('images').child('400.png'))
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
            <h1 style={{textAlign: 'center'}}>Your Group Name</h1>
        </Container>

        
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