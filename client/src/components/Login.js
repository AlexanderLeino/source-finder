import React from 'react'
import { useState } from "react";

import { useMutation } from '@apollo/client';
import { LOG_IN } from "../utils/mutations";
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Auth from '../utils/auth';
import { Container } from '@mui/material'


function Login (){
    const [emailAddress, setEmailAdress] = useState('');
    const [password, setPassword] = useState('');
    //const isInvalid = password === '' || emailAddress === '' || userName === '';

    const [LoginUser] = useMutation(LOG_IN);

    const handleFormSubmit = async(e) => {
        e.preventDefault();

        //Check if username is taken or not
        //Check password strength later
        
        const userData = {
            email: emailAddress,
            password: password,
        }

        try {
            const {
              data: {
                login: { token },
              },
            } = await LoginUser({
              variables: {
                ...userData,
              },
            });
      
            Auth.login(token);
          } catch (err) {
            console.log(err);
          }
    }

    return(
        <>
        

        
        <Box
          component="form"
          noValidate
          autoComplete="off"
          style={{display:'flex', justifyContent:'center', flexDirection:'column', padding:'2rem', alignItems:'center'}}

        >

          <h2>Login</h2>
       
          <TextField
            id="outlined-name"
            label="Email Address"
            value={emailAddress}
            onChange={({target}) => setEmailAdress(target.value)}
            style={{marginTop:'1rem'}}
          />

          <TextField
            id="outlined-name"
            label="Password"
            type='password'
            value={password}
            onChange={({target}) => setPassword(target.value)}
          />
 


            

          <Button variant='contained' onClick={handleFormSubmit}>Login</Button>

          </Box>
        
        </>
    )
}

export default Login