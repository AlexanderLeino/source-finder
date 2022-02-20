import React, { useEffect, useState } from 'react'
import SkillsButton from './SkillsButton'
import { Container, Typography, Box} from '@mui/material'
import { useQuery, useMutation} from '@apollo/client'
import { Get_Skills } from '../utils/queries'
import Auth from '../utils/auth'
import { UPDATE_USER_SKILLS } from '../utils/mutations'
function SelectTechForm() {
  
  const mySkills = localStorage.getItem('skillSet')
  const [updateUserSkills] = useMutation(UPDATE_USER_SKILLS);

  const token = Auth.getToken()
  const user = Auth.getProfile(token)
  console.log(user)

  const [codingLanguages, setCodingLanguages] = useState([])
  const [selectedLanguages, setSelectedLanguages] = useState([])

  const { loading, error, data } = useQuery(Get_Skills, {
    variables: {skill: mySkills }
  })

console.log(updateUserSkills)

  const skillData = data ? data.getSkills : []



  useEffect(() => {
    setCodingLanguages(skillData.map((language) => language.name))
  },[loading])

  useEffect(() => {
    
  },[selectedLanguages])

const buttonClick = (e) =>{
  //Fixes issue where if user clicks on the "+" on the button it wont push undefined.
  if(e.target.value === undefined) return
  removeButton(e.target.value)
}

const removeButton = (nameOfLanguage) => {
  setSelectedLanguages([nameOfLanguage, ...selectedLanguages])
  let filteredList =  codingLanguages.filter((name) => {
  if(name != nameOfLanguage){
    return true
  } else {
    return false
  }
  })
  setCodingLanguages(filteredList)
}



  return (
    <Container maxWidth='md' style={{background:'white', display:'Flex', justifyContent:'Center', alignItems:'center', flexDirection:'column', borderRadius:'25px', border:'1px solid black'}}>
    
    <Typography variant='h4' style={{marginTop:'.5rem', fontWeight:'bold', color:'#bf4578'}}>Select Preferred Technologies</Typography>
    <Box maxWidth='sm' style={{padding:'1rem', display: 'flex', flexWrap:'wrap', justifyContent:'center'}} >
       {codingLanguages.map((language)=> {
        return <SkillsButton detectClick={buttonClick} name={language} ></SkillsButton>
       })}
    </Box>

    </Container>
  )
}

export default SelectTechForm