import React from 'react'
import SkillsButton from './SkillsButton'
import { Container, Typography, Box} from '@mui/material'
import { useQuery } from '@apollo/client'
import { Get_Skills } from '../utils/queries'

function SelectTechForm() {
  const mySkills = localStorage.getItem('skillSet')
  console.log(mySkills)

  const { laoding, error, data } = useQuery(Get_Skills, {
    variables: {skill: mySkills }
  })

  console.log(data)


  return (
    <Container maxWidth='md' style={{background:'white', display:'Flex', justifyContent:'Center', alignItems:'center', flexDirection:'column', borderRadius:'25px', border:'1px solid black'}}>
    
    <Typography variant='h4' style={{marginTop:'.5rem', fontWeight:'bold', color:'#bf4578'}}>Select Preferred Technologies</Typography>
    <Box maxWidth='sm' style={{padding:'1rem'}} >
        <SkillsButton name={'FrameWorks'}/>
        <SkillsButton name={'FrameWorks'}/>
        <SkillsButton name={'FrameWorks'}/>
        <SkillsButton name={'FrameWorks'}/>
        <SkillsButton name={'FrameWorks'}/>
        <SkillsButton name={'FrameWorks'}/>
    </Box>

    </Container>
  )
}

export default SelectTechForm