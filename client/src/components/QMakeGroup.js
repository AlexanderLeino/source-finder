import React from 'react'
import { useState } from "react";

import { useMutation } from '@apollo/client';
import { CREATE_GROUP } from '../utils/mutations';
import Auth from '../utils/auth';

import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';


import { storage } from '../firebase'
import { app } from '../firebase'

const db = app.firestore()



function QMakeGroup(){
    const [groupName, setGroupName] = useState('');
    const [aboutGroup, setAboutGroup] = useState('');
    const [profilePic, setProfilePic] = useState('https://firebasestorage.googleapis.com/v0/b/sourcefinder-969bf.appspot.com/o/images%2FScreenshot%202021-08-03%20085032.png?alt=media&token=7453ed7c-aead-4fe9-b0d0-f9cca055a6f4');
    const [image, setImage] = useState(null);
    const thisUser = Auth.getProfile()
    const [createGroup] = useMutation(CREATE_GROUP)

    const [techState, setState] = React.useState({
        HTML: false,
        CSS: false,
        JavaScript: false,
        Node: false,
        mySql: false,
        MangoDB: false,
        ReactJS: false,
        FrameWorks: false
      });
    
    const handleChange = (event) => {
    setState({
        ...techState,
        [event.target.name]: event.target.checked,
    });
    };

    const { HTML, CSS, JavaScript, Node, mySql, MangoDB, ReactJS, FrameWorks } = techState;
    //const error = [HTML, CSS, JavaScript, Node].filter((v) => v).length !== 2;

    const handleChangePic = e => {
        if (e.target.files[0]) {
        setImage(e.target.files[0]);
        }
    };

    const handleUpload = (e) => {
        e.preventDefault
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
                setProfilePic(url);
            });
        }
        );
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        console.log(groupName, aboutGroup)
        console.log(techState)
        let techNeeded = []
        
        for (const property in techState) {
            
            if (techState[property]){
                techNeeded.push(`${property}`)
            }
        }
        console.log(techNeeded)
        const NewGroup = {
            groupName: groupName,
            techNeeded: techNeeded,
            aboutGroup: aboutGroup,
            category: 'frontEnd',
            adminId: thisUser.data._id,
            profilePic: profilePic
        }
        

        console.log(NewGroup)
        try{
            const theGroup = await createGroup({
                variables: {
                    ...NewGroup
                }
            })
            console.log(theGroup)
        }
        catch(err){
            console.log(err)
        }
        
        console.log(theGroup)
        

        

    }


    
    return(
        <div>
                
        <Container maxWidth='sm' style={{padding:'1.25rem', borderRadius:'25px', background:'white', boxShadow:'5px 10px 18px  black', border: '1px solid black'}}>
            <form style={{display:'flex', flexDirection:'column'}}>
                <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Group Name:</label>
                <input 
                    type='text'
                    id='groupName'
                    onChange={({target}) => setGroupName(target.value)}
                    style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}}
                    >
                </input>
                <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>About Group:</label>
                <input 
                    type='text' style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}}
                    id='aboutGroup'
                    onChange={({target}) => setAboutGroup(target.value)}
                    />

                <img src={profilePic} width='200px'></img>
            </form>
                <Box>
                    <input type='file' onChange={handleChangePic} />
                    <button onClick={handleUpload}>upload</button>
                </Box>
                
            <form>
                <Box sx={{ display: 'flex' }}>
                <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Tech You Need For Your Project</FormLabel>
                    <FormGroup>
                    <FormControlLabel
                        control={
                        <Checkbox checked={HTML} onChange={handleChange} name="HTML" />
                        }
                        label="HTML"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={CSS} onChange={handleChange} name="CSS" />
                        }
                        label="CSS"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={JavaScript} onChange={handleChange} name="JavaScript" />
                        }
                        label="JavaScript"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={Node} onChange={handleChange} name="Node" />
                        }
                        label="Node"
                    />
                    </FormGroup>
                </FormControl>

                <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Tech You Need For Your Project</FormLabel>
                    <FormGroup>
                    <FormControlLabel
                        control={
                        <Checkbox checked={mySql} onChange={handleChange} name="mySql" />
                        }
                        label="mySql"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={MangoDB} onChange={handleChange} name="MangoDB" />
                        }
                        label="MangoDB"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={ReactJS} onChange={handleChange} name="ReactJS" />
                        }
                        label="ReactJS"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox checked={FrameWorks} onChange={handleChange} name="FrameWorks" />
                        }
                        label="FrameWorks"
                    />
                    </FormGroup>
                </FormControl>
                </Box>
                <button onClick={handleFormSubmit}>
                    submit
                </button>
            </form>
        </Container>
        </div>


        
    )
}

export default QMakeGroup