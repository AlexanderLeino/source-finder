import React, {useState} from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import humanCoding from '../images/pairProgramming.svg'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import SignUpForm from '../components/SignUpForm'
import TestForm from '../components/testForm'
import './SignUpPage.css'
import AlexTest from '../components/AlexTest'
import { AiFillStar } from 'react-icons/ai'
import { List, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom'

import { Select } from '@mui/material'
import SkillsButton from '../components/SkillsButton'
import SelectTechForm from '../components/SelectTechForm'

function InitialSignUpPage() {
    const steps = ['Who Are You?', 'Select Preferred Technologies', 'Account Creation Complete'];
    const [activeStep, setActiveStep] = useState(0);
    const localStorage = window.localStorage
    const [createUser] = useMutation(CREATE_USER);
    const userTech = []
   
    const handleNext = () => {
      if (activeStep === 0){
      const inputUser = document.getElementById('username').value
      const inputPass1 = document.getElementById('pass1').value
      const inputPass2 = document.getElementById('pass2').value
      const inputEmail = document.getElementById('email').value
      const inputSkillSet = document.getElementById('skillSet').innerHTML

      localStorage.setItem('userName', inputUser)
      localStorage.setItem('pass1', inputPass1)
      localStorage.setItem('pass2', inputPass2)
      localStorage.setItem('email', inputEmail)
      localStorage.setItem('skillSet', inputSkillSet )
      
      } 
      else if(activeStep === 1){
        for (let i = 0; i < 10; i++){
          if (localStorage.getItem('tech' + i) != null){
            userTech.push(localStorage.getItem('tech' + i))
          }
        }
      }
    console.log(userTech)
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
   };
 
   const handleBack = () => {
     console.log(activeStep)
     //localStorage.removeItem('userName')
     if (activeStep === 2){
      const firstName = document.getElementById('firstName').value
      const lastName = document.getElementById('lastName').value
      const aboutMe = document.getElementById('aboutMe').value
      const gitHub = document.getElementById('gitHub').value
      const twitter = document.getElementById('twitter').value
      const hashNode = document.getElementById('hashNode').value
      const linkedIn = document.getElementById('linkedIn').value
      localStorage.setItem('firstName', firstName)
      localStorage.setItem('lastName', lastName)
      localStorage.setItem('aboutMe', aboutMe)
      localStorage.setItem('gitHub', gitHub)
      localStorage.setItem('twitter', twitter)
      localStorage.setItem('hashNode', hashNode)
      localStorage.setItem('linkedIn', linkedIn)

     }
     setActiveStep((prevActiveStep) => prevActiveStep - 1);
   };
    

    const submitForm = async () => {
     // if (inputPass1 === inputPass2){
          const userData = {
            userName: localStorage.getItem('userName'),
            email: localStorage.getItem('email'),
            password: localStorage.getItem('pass1')
          }
        console.log(userData)
        try {
    
            console.log(userData)
            const { data: { createUser: { token } } } = await createUser({
                variables: {
                    ...userData
                }
            })
            Auth.login(token)
    
        }
        catch (err) {
            console.log(err)
        }
      //}
      
    }
    
  return (<>
  
<Container maxWidth='100%' className='layer2 spacer2'>
    <Container >
    <Box mt={4}>
        <Grid container alignItems='center' style={{display:'flex', justifyContent:'center'}} spacing={3}>
       
            <Grid item xs={12} sm={6} >
            <div className='speechBubble'>
                <div className='signUpTitle'>Personalize Your Experience</div>
              <List style={{marginTop: '1rem', fontWeight:'bold', paddingTop:'0px'}}>
                  <ListItem >
                    <ListItemIcon>
                      <AiFillStar className='star' />
                    </ListItemIcon>
                    <ListItemText>
                    Able To Easily Request to Join A Group
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AiFillStar className='star'/>
                    </ListItemIcon>
                    <ListItemText>
                    Tailored Group Suggestions
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AiFillStar className='star'/>
                    </ListItemIcon>
                    <ListItemText>
                    Start Building a Proof of Work with Us!
                    </ListItemText>
                  </ListItem>
              </List>
            
            </div>
            </Grid>
            <Grid item xs={12} sm={6}  maxWidth='fit-content'>
                <img className='pairProgramming' src={humanCoding} alt='A picture of a male and female sitting at a computer appearing to be coding'></img>
            </Grid>
         
        </Grid>
    </Box>
    </Container >
    <Container maxWidth style={{ paddingTop:'2rem', paddingBottom:'2rem'}}>
        
        <Container maxWidth='md' style={{display:'flex', justifyContent:'center', marginBottom:'30px'}}>
       
      <Stepper sx={{
        ".MuiStepConnector-root": {
          display: "none"
        },
        
      }} activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          return (
            <Step  sx={{".MuiStepLabel-label": {
              fontSize:'20px',
              height:'auto',
             
              color:'white',
              textAlign:'center'

              },
              ".MuiStepLabel-label.Mui-active": {
              fontSize:'20px',
              height:'auto',
              fontWeight: "bold",
              color:'white',
              textAlign:'center'

              },
              ".MuiStepLabel-label.Mui-completed": {
              fontSize:'20px',
              height:'auto',
              color:'purple',
              fontWeight:'bold',
              textAlign:'center'
              },
              
              }} key={label} {...stepProps}>
              <StepLabel  sx={{".MuiStepIcon-text" : {
                fontWeight:'bold',
                
              },
              ".MuiSvgIcon-root": {
                fill:'#190b28',
                fontSize:'28px',
                textAlign:'center',
                marginRight:'-2px'
                
              }, 
              ".MuiSvgIcon-root.Mui-active": {
                fill:'#fefdff3a;'
              },
              ".MuiSvgIcon-root.Mui-completed": {
                fill:'purple',
                color:'white',
                
              }

              }}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

        <>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          </Box>
        </>
    
        </Container>
        {activeStep === 0 ? (<SignUpForm />) : (<div></div>)}
        {activeStep === 1 ? (<SelectTechForm activeStep={activeStep} />) : (<div></div>)}
        {activeStep === 2 ? (<TestForm />) : (<div></div>)}
        
        
        <Box style={{display:'flex', justifyContent:'center', marginTop:'2rem'}}>
            <Button
          
                style={{backgroundColor:'#bf4578', fontWeight:'bold', marginRight:'20px'}}
                className='button'
                variant='contained'
                onClick={handleBack}
                disabled={activeStep === 0}
                sx={{".MuiButton-root.Mui-disabled": {
                  backgroundColor:'black'
                }}}
      
                >Back</Button>
                {activeStep < 2 
            ? <Button style={{background:'#bf4578', fontWeight:'bold'}}
                className='button'
                variant='contained'
                onClick={handleNext}
                disabled={activeStep === 2}>Next
                </Button>
            : <Button 
                style={{background:'#bf4578', fontWeight:'bold'}}
                className='button'
                variant='contained' 
                onClick={submitForm} 
                disabled={activeStep < 2}>Submit
                </Button>}
        </Box>
    </Container>
    </Container>
</>
  )
}

export default InitialSignUpPage