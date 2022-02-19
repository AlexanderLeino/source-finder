import React from 'react'
import SkillsButton from './SkillsButton'
import { Container, Typography, Box} from '@mui/material'

function SelectTechForm() {
  const mySkills = localStorage.getItem('skillSet')
  let skillEl
  switch (mySkills){
    case 'Front End':
     skillEl = [<SkillsButton name={'HTML'}/>,<SkillsButton name={'CSS'}/>,<SkillsButton name={'JavaScript'}/>,<SkillsButton name={'React'}/>,<SkillsButton name={'FrameWorks'}/>]
      break
    case 'Full Stack':
      break
    case 'Back End':
      break

    default:
      console.log('bruh')
  }



  return (
    <Container maxWidth='md' style={{background:'white', display:'Flex', justifyContent:'Center', alignItems:'center', flexDirection:'column', borderRadius:'25px', border:'1px solid black'}}>
    
    <Typography variant='h4' style={{marginTop:'.5rem', fontWeight:'bold', color:'#bf4578'}}>Select Preferred Technologies</Typography>
    <Box maxWidth='md' style={{padding:'1rem'}} >
    {skillEl}
    </Box>

    </Container>
  )
}

export default SelectTechForm