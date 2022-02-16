import React from 'react'
import Container from '@mui/material/Container'
import {useState} from 'react'
function TestForm() {
  const localStorage = window.localStorage
  let oldUser = localStorage.getItem('userName')
  const [email, settingEmail] = useState('')
  const [userName, settingUserName] = useState(oldUser)
  const [pass1, settingPass1] = useState('')
  const [pass2, settingPass2] = useState('')
  console.log(oldUser)
  return (<>
  

  
    <Container maxWidth='sm' style={{padding:'1.25rem', borderRadius:'25px', background:'white', boxShadow:'5px 10px 18px  black', border: '1px solid black'}}>
    <form style={{display:'flex', flexDirection:'column'}}>
        <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Email:</label>
            <input type='email' id='email' style={{alignText:'left', marginBottom:'1rem', height:'1.50rem'}}/>
            <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Username:</label>
            <input onChange={({target}) => settingUserName(target.value)} placeholder={userName} type='text' id='username' style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}}/>
            <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Password:</label>
            <input type='password' id='pass1' style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}}/>
            <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Confirm Password</label>
            <input type='password' id='pass2' style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}}/>
    </form>
    </Container>
  
  </>
  )
}

export default TestForm