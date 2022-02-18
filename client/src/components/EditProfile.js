import { useState } from "react";
import { useMutation } from '@apollo/client'
import { UPDATE_USER } from '../utils/mutations'
import React from 'react'
import Auth from "../utils/auth";

import { storage } from '../firebase'
import { app } from '../firebase'

import Box from '@mui/material/Box';


const EditProfile = () => {

    let userData = Auth.getProfile()
    const [user, setUser] = useState(userData.data)
    const [editingFirstName, setEditingFirstName] = useState(false)
    // const [editingLastName, setEditingLastName] = useState(false)
    // const [editingEmail, setEditingEmail] = useState(false)
    // const [editingAddress, setEditingAddress] = useState(false)
    const [updateUser] = useMutation(UPDATE_USER)
    const [profilePic, setProfilePic] = useState('https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg');
    const [image, setImage] = useState(null);

    console.log(userData)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(user.firstName, user._id, user.email, user.userName)
        const {data: updatedUser} = await updateUser({
            variables: {
                user: {
                    _id: user._id,
                    email: user.email,
                    userName: user.userName,
                    firstName: user.firstName,
                    profilePic: profilePic
                }
            }
        })
        console.log(updatedUser)
        userData = updatedUser
    }

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

    return(
        <>
            {userData ? (

                <div>
                    {editingFirstName ? (
                        <div>
                            <form>
                                <input onChange={({target}) => setUser({...user, firstName: target.value})}></input>
                                <button type='submit' id='first-name' onClick={(e) => {
                                    setEditingFirstName(false)
                                    handleSubmit(e)
                                }}>submit</button>
                            </form>
                        </div>
                    ) : (
                        <button onClick={() => setEditingFirstName(true)}></button>
                    )}

                <Box>
                    <input type='file' onChange={handleChangePic} />
                    <button onClick={handleUpload}>upload</button>
                </Box>
                </div>
            ) : (

                <div>
                    <p>noData</p>
                </div>

            )}
        
        </>
    )
}


export default EditProfile