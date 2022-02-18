import React from 'react'
import SkillsButton from './SkillsButton'
import { Container, Typography, Box} from '@mui/material'

function SelectTechForm() {
  return (
    <Container maxWidth='md' style={{background:'white', display:'Flex', justifyContent:'Center', alignItems:'center', flexDirection:'column', borderRadius:'25px', border:'1px solid black'}}>
    
    <Typography variant='h4' style={{marginTop:'.5rem', fontWeight:'bold', color:'#bf4578'}}>Select Preferred Technologies</Typography>
    <Box maxWidth='md' style={{padding:'1rem'}} >
    <SkillsButton name={'Javascript'}/>
    <SkillsButton name={'Javascript'}/>
    <SkillsButton name={'Javascript'}/>
    <SkillsButton name={'Javascript'}/>
    <SkillsButton name={'Javascript'}/>
    </Box>

    </Container>
  )
}

export default SelectTechForm