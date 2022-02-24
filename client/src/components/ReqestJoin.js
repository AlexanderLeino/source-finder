import React from 'react'
import { useState } from "react";
import { useMutation } from '@apollo/client';
import { CREATE_REQUEST } from '../utils/mutations';



function RequestJoin(userData, groupData) {
    const [postContent, setPostContent] = useState('');
    const [portfolioLink, setPortfolioLink] = useState('');
    const [thisUser, setU] = useState(userData);
    

    const [createRequest] = useMutation(CREATE_REQUEST)
    //console.log(userData, groupData)


    const sendReq = () => {
        //for some reason, group data is stored in thisUser ...
        console.log(thisUser)
        const newReq = {
            requestUser: thisUser.userData.data._id,
            postContent: postContent,
            portfolioLink: portfolioLink,
            requestOrigin: thisUser.groupData._id,
            skil: null
        }
        console.log(newReq)
    }

    return (
        <>
        <form style={{display:'flex', flexDirection:'column'}}>
                <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Why You Want To Join</label>
                <textarea 
                    type='text'
                    id='postContent'
                    onChange={({target}) => setPostContent(target.value)}
                    style={{alignText:'left', marginBottom:'1rem',  height: '5rem'}}
                    >
                </textarea>
                <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Link Your Portfolio</label>
                <input 
                    type='text' style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}}
                    id='portlink'
                    onChange={({target}) => setPortfolioLink(target.value)}
                />
            </form>
            <button onClick={sendReq}>Submit</button>
        </>
        

    )
}

export default RequestJoin