import React from 'react'
import Container from '@mui/material/Container'
import { InputLabel, Select, MenuItem, Box, FormControl } from '@mui/material'
import {useState} from 'react'
import {useMutation} from '@apollo/client'
import { CREATE_USER } from '../utils/mutations'
import { Button } from '@mui/material'
import Auth from '../utils/auth'

function SignUpForm() {
  const localStorage = window.localStorage
  let oldUser = localStorage.getItem('userName')
  let oldEmail = localStorage.getItem('email')
  let oldPass1 = localStorage.getItem('pass1')
  let oldPass2 = localStorage.getItem('pass2')
  let selectedSkillSet = localStorage.getItem('skillSet')

  const [email, settingEmail] = useState(oldEmail)
  const [userName, settingUserName] = useState(oldUser)
  const [pass1, settingPass1] = useState(oldPass1)
  const [pass2, settingPass2] = useState(oldPass2)
  const [skillSet, setSkillSet] = useState(selectedSkillSet)

  const [createUser] = useMutation(CREATE_USER)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const userData = {
      userName: userName,
      password: pass1, 
      email: email
    }

    try {
      const { data: { createUser: { token } } } = await createUser({
        variables: {
          ...userData
        }
      })
      Auth.login(token)
      
    } catch(err){
      console.log(err)
    }
  }
 


  return (<>
  

  
    <Container maxWidth='sm' style={{padding:'1.25rem', borderRadius:'25px', background:'white', boxShadow:'5px 10px 18px  black', border: '1px solid black'}}>
    <form style={{display:'flex', flexDirection:'column'}} onSubmit={handleSubmit}>
        <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Email:</label>
            <input onChange={({target}) => settingEmail(target.value)} placeholder={email} type='email' id='email' style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}} value={email}/>
            <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Username:</label>
            <input onChange={({target}) => settingUserName(target.value)} placeholder={userName} type='text' id='username' style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}} value={userName}/>
            <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Password:</label>
            <input onChange={({target}) => settingPass1(target.value)}  type='password' id='pass1' style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}} value={pass1}/>
            <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Confirm Password</label>
            <input onChange={({target}) => settingPass2(target.value)}  type='password' id='pass2' style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}} value={pass2}/>

            <InputLabel id="demo-simple-select-label" style={{fontSize:'1.25rem', marginBottom: '.5rem',}}>Skill Set</InputLabel>
                <Select
                  id="skillSet"
                  value={skillSet}
                  label="Skill Set"
                  onChange={({target}) => setSkillSet(target.value)} 
                >
                  <MenuItem  value={"Front End"}>Front End</MenuItem>
                  <MenuItem  value={"Full Stack"}>Full Stack</MenuItem>
                  <MenuItem  value={"Back End"}>Back End</MenuItem>
                </Select>
      
                  {/* <Button 
                    variant='contained'
                    type='submit'  
                    style={{borderRadius:'25px', background:'purple', fontWeight:'bold', margin:'.5rem',  border:'1px solid black',  minWidth:'min-content', fontSize:'10px'}}
                    > Create Account
                  </Button> */}

                    </form>
               
                </Container>
  </>
  )
}

export default SignUpForm