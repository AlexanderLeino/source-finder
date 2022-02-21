import React, { useEffect } from 'react'
import Container from '@mui/material/Container'
import { InputLabel, Select, MenuItem, Box, FormControl } from '@mui/material'
import {useState} from 'react'
import {useMutation} from '@apollo/client'
import { CREATE_USER } from '../utils/mutations'
import { Button } from '@mui/material'
import Auth from '../utils/auth'

function SignUpForm() {
  
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
    passwordConfirmation: "",
    email: "",
    skillSet: ""
  })


  const localStorage = window.localStorage
  let oldUser = localStorage.getItem('userName')
  let oldEmail = localStorage.getItem('email')
  let oldPass1 = localStorage.getItem('pass1')
  let oldPass2 = localStorage.getItem('pass2')
  let selectedSkillSet = localStorage.getItem('skillSet')

  const handleChange = (e) => {
      const value = e.target.value
      setUserData({
        ...userData,
        [e.target.name]: value
      })
  }
  return (<>
  

  
    <Container maxWidth='sm' style={{padding:'1.25rem', borderRadius:'25px', background:'white', boxShadow:'5px 10px 18px  black', border: '1px solid black'}}>
    <form style={{display:'flex', flexDirection:'column'}}>
        <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Email:</label>
            <input onChange={handleChange} type='email' name='email' id='email' style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}} value={userData.email}/>
            <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Username:</label>
            <input onChange={handleChange}  type='text' id='username' name='userName' style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}} value={userData.userName}/>
            <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Password:</label>
            <input onChange={handleChange}  type='password' id='pass1' name='password' style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}} value={userData.password}/>
            <label style={{fontSize:'1.25rem', marginBottom: '.5rem'}}>Confirm Password</label>
            <input onChange={handleChange}  type='password' id='pass2' name='passwordConfirmation' style={{alignText:'left', marginBottom:'1rem',  height:'1.50rem'}} value={userData.passwordConfirmation}/>

            <InputLabel id="demo-simple-select-label" style={{fontSize:'1.25rem', marginBottom: '.5rem',}}>Skill Set</InputLabel>
                <Select
                  id="skillSet"
                  value={userData.skillSet}
                  label="Skill Set"
                  name='skillSet'
                  onChange={handleChange} 
                >
                  <MenuItem  value={"Front End"}>Front End</MenuItem>
                  <MenuItem  value={"Full Stack"}>Full Stack</MenuItem>
                  <MenuItem  value={"Back End"}>Back End</MenuItem>
                </Select>
      </form>        
                    </Container>
           
  </>
  )
}

export default SignUpForm