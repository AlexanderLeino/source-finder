import React from 'react'
import Container from '@mui/material/Container'
import {useState} from 'react'
import { storage } from '../firebase'
function TestForm() {
  const localStorage = window.localStorage
  let oldFirst = localStorage.getItem('firstName')
  let oldLast = localStorage.getItem('lastName')
  let oldAbout = localStorage.getItem('aboutMe')

  let oldGit = localStorage.getItem('gitHub')
  let oldTwitter = localStorage.getItem('twitter')
  let oldHash = localStorage.getItem('hashNode')
  let oldLinkedIn = localStorage.getItem('linkedIn')


  const [firstName, settingFirstName] = useState(oldFirst)
  const [lastName, settingLastName] = useState(oldLast)
  const [aboutMe, settingAboutMe] = useState(oldAbout)

 
  const [githubLink, settingGithubLink] = useState(oldGit)
  const [twitterLink, settingTwitterLink] = useState(oldTwitter)
  const [hashNodeLink, settingHashNodeLink] = useState(oldHash)
  const [linkedinLink, settingLinkedinLink] = useState(oldLinkedIn)

  const [profilePic, setProfilePic] = useState('https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg');
  const [image, setImage] = useState(null);

  const handleChangePic = e => {
    if (e.target.files[0]) {
    setImage(e.target.files[0]);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault()
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
            localStorage.setItem('profilePic', url)
        });
    }
    );
  };

  return (<>
  

  
    <Container maxWidth='sm' style={{padding:'1.25rem', borderRadius:'25px', background:'white', boxShadow:'5px 10px 18px  black', border: '1px solid black'}}>
    <form style={{display:'flex', flexDirection:'column'}}>
                    <img src ={profilePic}></img>
                    <input type='file' onChange={handleChangePic} />
                    <button onClick={handleUpload}>upload</button>
            <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>First Name:</label>
            <input onChange={({target}) => settingFirstName(target.value)} placeholder={firstName} type='text' id='firstName' style={{alignText:'left', marginBottom:'1rem', height:'1.50rem'}} value={firstName}/>
            <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Last Name:</label>
            <input onChange={({target}) => settingLastName(target.value)} placeholder={lastName} type='text' id='lastName' style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}} value={lastName}/>
            <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>About Me:</label>
            <textarea onChange={({target}) => settingAboutMe(target.value)} placeholder={aboutMe} type='text' id='aboutMe' style={{alignText:'left', marginBottom:'1rem',  height:'5rem'}} value={aboutMe}> </textarea>
            <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Link Your Github</label>
            <input onChange={({target}) => settingGithubLink(target.value)} placeholder={githubLink} type='text' id='gitHub' style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}} value={githubLink}/>
            <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Link Your Twitter</label>
            <input onChange={({target}) => settingTwitterLink(target.value)} placeholder={twitterLink} type='text' id='twitter' style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}} value={twitterLink}/>
            <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Link Your HashNode</label>
            <input onChange={({target}) => settingHashNodeLink(target.value)} placeholder={hashNodeLink} type='text' id='hashNode' style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}} value={hashNodeLink}/>
            <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Link Your LinkedIn</label>
            <input onChange={({target}) => settingLinkedinLink(target.value)} placeholder={linkedinLink} type='text' id='linkedIn' style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}} value={linkedinLink}/>

            
    </form>
    </Container>
  
  </>
  )
}

export default TestForm