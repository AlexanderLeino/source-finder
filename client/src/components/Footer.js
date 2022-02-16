import React from 'react'
import './Footer.css'
import {Container, Box} from '@mui/material'

function Footer() {
  return (
    <Container maxWidth='100%' style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
      <Box style={{color:'white', fontSize:'1.5rem', marginTop:'6rem'}}>Built By: Alex and Quentin </Box>
      <Box style={{color:'white', fontSize:'1.5rem'}}>For More Information about us and our project <a href='https://github.com/AlexanderLeino/hashnode-hackathon' target='_blank'>click here!</a></Box>
    </Container>
    )
}

export default Footer;
