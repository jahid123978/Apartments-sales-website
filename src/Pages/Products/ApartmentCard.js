import React from 'react';
import useAuth from '../Context/useAuth';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { useHistory } from 'react-router-dom';

const ApartmentCard = ({apartment}) => {
  const history = useHistory();
  const handlePurchease = () =>{
    history.push(`/place/${apartment._id}`)
  }
    return (
        <Grid style={{marginTop: '20px'}} item xs={12} sm={6} md={4}>
             <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250px"
            image={apartment.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {apartment.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              ${apartment.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {apartment.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={handlePurchease} style={{marginLeft: '100px',
           border: '1px solid black',
           padding: '4px 8px', backgroundColor: '#0000FF', color: 'white',
           borderRadius: '15px'}} size="small" color="primary">
            Purchese
          </Button>
        </CardActions>
      </Card>
        </Grid>
       
    );
};

export default ApartmentCard;