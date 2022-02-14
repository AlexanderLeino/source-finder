import React from 'react'
import './HomePage.css'
import Auth from '../utils/auth'
import {Typography } from '@mui/material'
import  Box  from '@mui/material/Box'
import Card from '../components/Card'
import Container from '@mui/material/Container'
import groupImage from '../images/teamwork.svg'
import {IoLogoJavascript} from 'react-icons/io'
import { SiMongodb, SiChakraui, SiPython, SiJquery, SiFigma, SiReact, SiBootstrap} from 'react-icons/si'
import { GrGraphQl, GrMysql } from 'react-icons/gr'

const groupData = [
  {   
     
      groupName: 'Source Finder',
      techNeeded: [<IoLogoJavascript/>, <SiMongodb/>, <SiFigma/>, <SiBootstrap/>],
      aboutGroup: 'This group is pretty new and we are looking for a lot of different personal please apply within.',
      category: 'Web Development',
      adminId: '1',
      
  },
  {   
     
      groupName: 'Freelancers R Us',
      techNeeded: [<GrGraphQl/>, <SiChakraui/>, <SiReact/>],
      aboutGroup: 'This group is all about finding the best artists in LA.',
      category: 'Web Development',
      adminId: '2',
  },
  {
     
      groupName: 'Football Fanatics',
      techNeeded: [<SiPython/>, <GrMysql/>, <SiJquery/>],
      aboutGroup: 'Looking for people that are passionate about footaball.',
      category: 'Web Development',
      adminId: '3',
  }
]


function HomePage() {
  const userData = Auth.getProfile()
  

  return (
    <>
  <Box className='spacer layer1' style={{paddingBottom:'10px'}}>
  <Container maxWidth='xl' style={{display:'flex', justifyContent:'center', paddingTop:'1.5rem'}}>
    <Typography variant="h3" style={{textShadow:"1px 1px 2px pink", color:'white', fontWeight:'bold', textAlign:'center'}}>Featured Groups</Typography>
  </Container>
 
<Box style={{display:'flex', justifyContent:'center', flexWrap:'wrap', marginBottom:'5rem'}}>
    {groupData.map(group => {
      return <Box margin={3}><Card name={group.groupName} techNeeded={group.techNeeded} about={group.aboutGroup}/>
 </Box>
    })}
  
  </Box>
  <Box mt={30}>
    
  </Box>

  <Container maxWidth='100%' style={{display:'flex', justifyContent:'space-between', flexWrap:'Wrap'}}>
    <Box style={{width:'50%'}}>
      <Typography variant='h1' style={{color:'white', textAlign:'center', fontWeight:'bold', textShadow:"1px 1px 2px pink",}}>Who Are We?</Typography>
      
        <Typography variant='h5' style={{ color:'white', textAlign:'center', marginTop:'50px', fontWeight:'bold', lineHeight:'3.5rem'}}>Our Mission is to create a fun and accessible enviroment where computer programmers can connect with one another and build something truly great! </Typography>
      
    </Box>
      <img src={groupImage}/>
  </Container>
  <Box mt={10}>
  <Typography variant='h3' style={{color:'white', textAlign:'center', fontWeight:'bold', textShadow:"1px 1px 2px pink", width:'100%'}}>How Do You Get Involved?</Typography>
  </Box>
  
  </Box>
 
  </>
  )
}

export default HomePage;


