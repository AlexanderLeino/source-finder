import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import business from '../images/business.jpg'
import {FaJava} from 'react-icons/fa'
import { Box } from '@mui/material';

export default function FeatureGroupCard() {
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
          Name of Group
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is the coolest group you will ever get involved with.
        </Typography>
        <Typography color="text.primary">
          Technologies Needed: 
        </Typography>
        <Box mt={1} style={{display:'flex', flexWrap:'wrap'}}>
          <FaJava style={{fontSize:'30px', color:'#3A205C'}}/>
        </Box>
      </CardContent>
      <CardActions style={{display: 'flex',justifyContent: 'center'}}>
        <Button size="small" variant='contained' style={{background:'#3A205C', fontWeight:'bold', marginBottom:'.25rem'}}>Learn More</Button>
      </CardActions>
    </Card>
  );
}