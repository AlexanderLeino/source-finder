import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function FeatureGroupCard() {
  return (
    <Card sx={{ maxWidth: 345 }} style={{borderRadius:'25px'}}>
      <CardMedia
        component="img"
        height="140"
        image="../"
        alt="green iguana"
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
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}