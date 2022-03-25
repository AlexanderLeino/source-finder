import * as React from 'react';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Box} from '@mui/material'
import business from '../images/business.jpg'
import {FaJava} from 'react-icons/fa'
import styled from 'styled-components'
import helperFunctions from '../utils/helpers';



export default function FeatureGroupCard({cardInfo}) {
  const { groupName, aboutGroup, techNeeded, _id} = cardInfo
  let { getIcon } = helperFunctions()
  const Flex = styled.div`
    display: flex;
    justify-content: center;
  `

  const CardOutline = styled.div`
    max-width: 345px;
    border-radius: 25px;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
    border: 1px solid black;
    background-color:white;
  `
  const CardPicture = styled.img`
    height: 200px;
    padding: .5rem;
    border-radius: 25px;
    width: 100%

  `

  return (
    <CardOutline sx={{ maxWidth: 345 }} style={{borderRadius:'25px', boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .2)", border:'1px solid black'}}>
    <Flex>
      <CardPicture
        component="img"
        height="200"
        src={business}
        alt="green iguana"
        style={{padding:'.5rem', borderRadius:'25px', }}
      />
    </Flex>
      <CardContent style={{padding:'1rem'}}>
        <Typography gutterBottom variant="h5" component="div" >
          {groupName}
        </Typography>

        <Typography style={{textAlign:'center', marginBottom:'.5rem'}} variant="body2" color="text.secondary">
          {aboutGroup}
        </Typography>

        <Typography color="text.primary">
          Technologies Needed: 
        </Typography>
        
        <Box mt={1} style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', fontSize:'30px'}}>
         { techNeeded.map((tech) => {
           getIcon(tech.name)
           return <Box>{getIcon(tech.name)}</Box>
          })}
        </Box>

      </CardContent>
    
      <CardActions style={{display: 'flex',justifyContent: 'center'}}>
      <Link to={`group/${_id}`}>
        <Button size="small" variant='contained' style={{background:'#3A205C', fontWeight:'bold', marginBottom:'.25rem', padding:'.35rem'}}>Learn More</Button>
    </Link>
      </CardActions>
    </CardOutline>
   
  );
}