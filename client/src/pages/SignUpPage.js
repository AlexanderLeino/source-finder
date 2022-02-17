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




function InitialSignUpPage() {
    const steps = ['Who Are You?', 'Select Preferred Technologies', 'Account Creation Complete'];
    const [activeStep, setActiveStep] = useState(0);
    const localStorage = window.localStorage

    const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const inputUser = document.getElementById('username').value
    const inputPass1 = document.getElementById('pass1').value
    const inputPass2 = document.getElementById('pass2').value
    const inputEmail = document.getElementById('email').value

    localStorage.setItem('userName', inputUser)
    localStorage.setItem('pass1', inputPass1)
    localStorage.setItem('pass2', inputPass2)
    localStorage.setItem('email', inputEmail)

   };
 
   const handleBack = () => {
     setActiveStep((prevActiveStep) => prevActiveStep - 1);
     //localStorage.removeItem('userName')
   };
    

    const submitForm = () => {
      

      if (inputPass1 === inputPass2){
          const userData = {
            userName: inputUser,
            email: inputEmail,
            password: inputPass1,
          }
        console.log(userData)
        // try {
    
        //     console.log(userData)
        //     const { data: { createUser: { token } } } = await createUser({
        //         variables: {
        //             ...userData
        //         }
        //     })
        //     Auth.login(token)
    
        // }
        // catch (err) {
        //     console.log(err)
        // }
      }
      
    }
  return (<>
  
<Container maxWidth='100%' className='layer2 spacer2'>


    
   
    
    <Container >
    <Box mt={4}>
        <Grid container alignItems='center' spacing={3}>
       
            <Grid item xs={12} sm={6}>
            <div className='speechBubble'>
                <div style={{textAlign:'center', fontSize:'2.5rem', fontWeight:'bold'}}>Personalize Your Experience</div>
            <ul style={{textAlign: 'center', marginTop: '1rem', listStyle:'none', lineHeight:'2.25rem', fontWeight:'bold'}}>
                <li style={{textAlign: 'center', fontSize:'1.25rem', marginLeft: '28px'}}>Able To Easily Request to Join A Group</li>
                <li style={{textAlign: 'center', fontSize:'1.25rem'}}>Tailored Group Suggestions</li>
                <li style={{textAlign: 'center', fontSize:'1.25rem'}}>Start Building a Proof of Work with Us!</li>
            </ul>
            </div>
            </Grid>
            <Grid item xs={12} sm={6} maxWidth='fit-content'>
                <img style={{height: 'auto', maxWidth:'600px', padding:'0px'}} src={humanCoding} alt='A picture of a women sitting at her computer'></img>
            </Grid>
         
        </Grid>
    </Box>
    </Container >
    <Container maxWidth style={{ paddingTop:'2rem', paddingBottom:'2rem'}}>
        
        <Container maxWidth='sm'>
        <Box sx={{ width: '100%' }}>
      <Stepper styles={{}} activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          return (
            <Step  key={label} {...stepProps}>
              <StepLabel StepIconProps={{classes: {
                text: {
                  fill: 'green'
                }
              }}}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

        <>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          </Box>
        </>
    </Box>
        </Container>
        {activeStep === 0 ? (<SignUpForm />) : (<div></div>)}
        {activeStep === 1 ? (<AlexTest />) : (<div></div>)}
        {activeStep === 2 ? (<TestForm />) : (<div></div>)}
        
 
        <Box style={{display:'flex', justifyContent:'flex-end'}}>
            <Button variant='contained' onClick={handleBack} disabled={activeStep === 0}>Back</Button>
            {activeStep < 2 ? <Button variant='contained' onClick={handleNext} disabled={activeStep === 2}>Next</Button> : <Button variant='contained' onClick={submitForm} disabled={activeStep < 2}>Submit</Button>}
            
        </Box>
    </Container>
    </Container>
</>
  )
}

export default InitialSignUpPage