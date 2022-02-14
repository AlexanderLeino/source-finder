import React from 'react'
import './HomePage.css'
import Auth from '../utils/auth'
import { Button, Typography } from '@mui/material'
import gradient from '../dreamy gradients Γÿü∩╕Å Γ£¿/strawberrylemonade.png'
import sourceFinder from '../images/sourceFinder.svg'
import Grid  from '@mui/material/Grid'
import  Box  from '@mui/material/Box'
import Card from '../components/Card'
import Container from '@mui/material/Container'
import { height } from '@mui/system'






function HomePage() {
  const userData = Auth.getProfile()
  return (
  <>
  <Container maxWidth='xl' style={{display:'flex', justifyContent:'center', marginTop:'1.25rem'}}>
    <Typography variant="h4" style={{}}>Featured Groups</Typography>
  </Container>
  <Box style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
    <Box margin={3}>
      <Card />
    </Box>
    <Box margin={3}>
      <Card />
    </Box>
    <Box margin={3}>
      <Card />
    </Box>
  </Box>
  <Box mt={5}> 
    <h1 style={{textAlign:'center'}}>Who Are We?</h1>
  </Box>
  </>
  )
}

export default HomePage;


