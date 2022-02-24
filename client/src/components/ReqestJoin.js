import React from 'react'
import { useState } from "react";
import { useMutation } from '@apollo/client';
import { CREATE_REQUEST } from '../utils/mutations';


import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function RequestJoin(userData, groupData) {
    const [postContent, setPostContent] = useState('');
    const [portfolioLink, setPortfolioLink] = useState('');
    const [thisUser, setU] = useState(userData);
    const theButtons = []
    console.log(thisUser)
    

    const selectedHandle = (e) => {
        const buttonDiv = document.getElementById('techButtons')
        console.log(e.innerHTML)
        if (e.target.checked){
            for (let i = 0; i < buttonDiv.children.length; i ++){
                const currButton = document.getElementById('tech' + i)
                console.log(currButton.firstChild.nextSibling.innerHTML)
                currButton.firstChild.firstChild.disabled = true
                console.log(currButton)
            }
            e.target.disabled = false
        }
        else{
            for (let i = 0; i < buttonDiv.children.length; i ++){
                const b = document.getElementById('tech' + i)
                b.firstChild.firstChild.disabled = false
            }
        }

        
    }

    for (let i = 0; i < thisUser.groupData.techNeeded.length; i++){
        const checkButtons = <FormControlLabel
        value={thisUser.groupData.techNeeded[i]._id}
        control={<Checkbox />}
        label={thisUser.groupData.techNeeded[i].name}
        labelPlacement="bottom"
        onClick={selectedHandle}
        id={'tech' + i}
      />
      theButtons.push(checkButtons)
    }
    

    const [createRequest] = useMutation(CREATE_REQUEST)
    //console.log(userData, groupData)


    const sendReq = async () => {
        //for some reason, group data is stored in thisUser ...
        console.log(thisUser)
        const buttonDivs = document.getElementById('techButtons')
        let techId
        let count = 0
        for (let i = 0; i < buttonDivs.children.length; i++){
            const c = document.getElementById('tech' + i)
            if(c.firstChild.firstChild.disabled == false){
                if (count === 0){ //if its not 0 then none of them are clicked
                    techId = c.firstChild.firstChild.value
                }
                else{
                    techId = null
                }
                
                count++
            }
            else{
                console.log('bruh')
            }
        }

        if (techId != null){ //makes sure they clicked a checkbox
            const newReq = {
                requestUser: thisUser.userData.data._id,
                requestUserName: thisUser.userData.data.userName,
                postContent: postContent,
                portfolioLink: portfolioLink,
                requestOrigin: thisUser.groupData._id,
                skill: techId
            }
            console.log(newReq)
            try{
                const request = await createRequest({
                    variables: {
                        ... newReq
                    }
                })
                console.log(request)
            }
            catch(err){
                console.log(err)
            }
        }

        

    
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
                <div id='techButtons'> 
                    {theButtons}
                </div>
                
            </form>
            <button onClick={sendReq}>Submit</button>
        </>
        

    )
}

export default RequestJoin