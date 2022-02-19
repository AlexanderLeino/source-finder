import React from 'react'

import MyAvitar from '../components/MyAvitar'


function ProfilePage(){


    return(
        <div style={{display: 'flex', justifyContent: 'flex-start', marginLeft: '4%', marginTop: '2%'}}>
            <MyAvitar isLarge={true}/>
            <div style={{marginLeft: '4%'}}>
                <h2>My Profile</h2>
            </div>
            
        </div>
    )
}



export default ProfilePage