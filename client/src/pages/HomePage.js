import React, { useState, useEffect } from 'react'
import './HomePage.css'
import Auth from '../utils/auth'
import {Typography, Grid, Button} from '@mui/material'
import  Box  from '@mui/material/Box'
import Card from '../components/Card'
import Container from '@mui/material/Container'
import groupImage from '../images/teamwork.svg'
import {IoLogoJavascript} from 'react-icons/io'
import { SiMongodb, SiChakraui, SiPython, SiJquery, SiFigma, SiReact, SiBootstrap} from 'react-icons/si'
import { GrGraphQl, GrMysql } from 'react-icons/gr'

import { useQuery } from '@apollo/client'
import { GET_ALL_GROUPS } from '../utils/queries'




// const groupData = [
//   {   
     
//       groupName: 'Source Finder',
//       techNeeded: [<IoLogoJavascript/>, <SiMongodb/>, <SiFigma/>, <SiBootstrap/>],
//       aboutGroup: 'This group is pretty new and we are looking for a lot of different personal please apply within.',
//       category: 'Web Development',
//       adminId: '1',
      
//   },
//   {   
     
//       groupName: 'Freelancers R Us',
//       techNeeded: [<GrGraphQl/>, <SiChakraui/>, <SiReact/>],
//       aboutGroup: 'This group is all about finding the best artists in LA.',
//       category: 'Web Development',
//       adminId: '2',
//   },
//   {
     
//       groupName: 'Football Fanatics',
//       techNeeded: [<SiPython/>, <GrMysql/>, <SiJquery/>],
//       aboutGroup: 'Looking for people that are passionate about footaball.',
//       category: 'Web Development',
//       adminId: '3',
//   }
// ]



function HomePage() {
  const groupData = []
  const userData = Auth.getProfile()
  const [featuredGroup, settingFeatureGroup] = useState([])
  const {loading, data, error} = useQuery(GET_ALL_GROUPS)
  //console.log(error)

  function scrubObj(obj) {
    const newObj ={
      adminId: obj.adminId,
      groupName: obj.groupName,
      aboutGroup: obj.aboutGroup,
      category: obj.category,
      techNeeded: obj.techNeeded
    }
    console.log(newObj)
    return newObj
  }

  useEffect(() => {
    console.log(data)
    if (data){
      groupData.push(scrubObj(data.getAllGroups[0]))
      groupData.push(scrubObj(data.getAllGroups[1]))
      groupData.push(scrubObj(data.getAllGroups[2]))
      settingFeatureGroup(groupData)
      console.log(featuredGroup)
      //hasData = true
    }
    
    console.log(featuredGroup)
},[!loading])

  

  return (
    <>
  <Box className='spacer layer1' style={{paddingBottom:'10px'}}>
  <Container maxWidth='100%' className='container-wrapper'>

 
  <Container maxWidth='xl' style={{display:'flex', justifyContent:'center', paddingTop:'1.5rem'}}>
    <Typography variant="h3" style={{textShadow:"1px 1px 2px pink", color:'white', fontWeight:'bold', textAlign:'center'}}>Featured Groups</Typography>
  </Container>
 {loading ?(<div>hello</div>) :
 ( 
 <Box style={{display:'flex', justifyContent:'center', flexWrap:'wrap', marginBottom:'5rem'}}>
 {featuredGroup.map(group => {
   {console.log(group)}
   return <Box margin={4} xs={4}><Card name={group.groupName} techNeeded={group.techNeeded} about={group.aboutGroup}/>
</Box>
 })}

</Box>)}

 
  <Grid container spacing={3} alignItems='center' style={{marginTop:'2rem'}} >
    <Grid  xs={12} sm={12} md={6}>
    <div style={{textAlign:'center', paddingLeft:'1.50rem'}}>
        <h1 className='who-are-we'>Who Are We?</h1>
        <div className='missionStatement'>Our Mission is to create a fun and accessible enviroment where computer programmers can create a group to connect with one another and build anything your heart desires no matter the scale! </div>
        <Button  variant='contained' style={{background:'#bf4578', fontWeight:'bold', marginBottom:'2rem', padding:'.75rem', border:'2px solid white', marginTop:'2rem', letterSpacing:'5px'}}> Start Exploring</Button>
    </div>
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
      <img className='womenCoding' src={groupImage}/>
    </Grid>
  </Grid>
  </Container>

 

  </Box>
  

   
  </>
  )
}

export default HomePage;


