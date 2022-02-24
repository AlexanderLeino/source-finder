import React from 'react'
import { useState } from "react";




function RequestJoin(userData, groupData) {
    const [groupName, setGroupName] = useState('');
    const [aboutGroup, setAboutGroup] = useState('');
    console.log(userData, groupData)

    return (
        <>
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
            </form>
        </>
        

    )
}

export default RequestJoin