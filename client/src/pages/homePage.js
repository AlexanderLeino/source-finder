import React from 'react'
import './HomePage.css'
import Auth from '../utils/auth'
import { Button } from '@mui/material'
import gradient from '../dreamy gradients Γÿü∩╕Å Γ£¿/strawberrylemonade.png'
import sourceFinder from '../images/sourceFinder.svg'
import Grid  from '@mui/material/Grid'
import  Box  from '@mui/material/Box'
import Card from '../components/Card'






function HomePage() {
  const userData = Auth.getProfile()
  return (
  <>
  <Box style={{display:'flex', justifyContent:'center'}}>
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
  </>
  )
}

export default HomePage;


