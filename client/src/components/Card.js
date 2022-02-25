import * as React from 'react';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Box} from '@mui/material'
import business from '../images/business.jpg'
import {FaJava} from 'react-icons/fa'



export default function FeatureGroupCard({cardInfo}) {
  const { groupName, aboutGroup, techNeeded, _id} = cardInfo
  

  return (
    <Card sx={{ maxWidth: 345 }} style={{borderRadius:'25px', boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .2)", border:'1px solid black'}}>
      <CardMedia
        component="img"
        height="200"
        image={business}
        alt="green iguana"
        style={{padding:'.5rem', borderRadius:'25px', }}
      />
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
           return <Box>{tech.name}</Box>
          })}
        </Box>

      </CardContent>
    
      <CardActions style={{display: 'flex',justifyContent: 'center'}}>
      <Link to={`group/${_id}`}>
        <Button size="small" variant='contained' style={{background:'#3A205C', fontWeight:'bold', marginBottom:'.25rem', padding:'.35rem'}}>Learn More</Button>
    </Link>
      </CardActions>
    </Card>
   
  );
}