import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Auth from '../utils/auth'
import { useQuery } from '@apollo/client'
import {GET_ME} from '../utils/queries'
import { minWidth } from '@mui/system'




function MyAvitar({isLarge}){

    const [profilePic, setProfilePic] = useState("https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg")
    let meData = Auth.getProfile()
    console.log(meData.data.id_id)
    if (meData != null){
        const { loading, data, error } = useQuery(GET_ME, {
            variables: {id: meData.data._id}
        })
        console.log(data)
        const profilePicture = data ? data.me.profilePic : "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"

        useEffect(() => {
            setProfilePic(profilePicture)
        },[!loading])
        console.log(data)
    }

    
    
    return(
        <>
        {isLarge ? (
            <img src={profilePic} />
        ): (
            <img src={profilePic} style={{height: '40px', width: 'auto', minWidth: '40px', borderRadius: '25px'}} />
        )}
        
        </>

    )
}

export default MyAvitar