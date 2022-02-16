import React from 'react'
import Container from '@mui/material/Container'
import {useState} from 'react'
function SignUpForm() {
  const localStorage = window.localStorage
  let oldUser = localStorage.getItem('userName')
  let oldEmail = localStorage.getItem('email')
  let oldPass1 = localStorage.getItem('pass1')
  let oldPass2 = localStorage.getItem('pass2')

  const [email, settingEmail] = useState('')
  const [userName, settingUserName] = useState(oldUser)
  const [pass1, settingPass1] = useState('')
  const [pass2, settingPass2] = useState('')
  console.log(oldUser)
  return (<>
  

  
    <Container maxWidth='sm' style={{padding:'1.25rem', borderRadius:'25px', background:'white', boxShadow:'5px 10px 18px  black', border: '1px solid black'}}>
    <form style={{display:'flex', flexDirection:'column'}}>
        <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Email:</label>
            <input onChange={({target}) => settingEmail(target.value)} placeholder={email} type='text' id='username' style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}} value={email}/>
            <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Username:</label>
            <input onChange={({target}) => settingUserName(target.value)} placeholder={userName} type='text' id='username' style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}} value={userName}/>
            <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Password:</label>
            <input onChange={({target}) => settingPass1(target.value)} placeholder={pass1} type='text' id='username' style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}} value={pass1}/>
            <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Confirm Password</label>
            <input onChange={({target}) => settingPass2(target.value)} placeholder={pass2} type='text' id='username' style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}} value={pass2}/>
    </form>
    </Container>
  
  </>
  )
}

export default SignUpForm