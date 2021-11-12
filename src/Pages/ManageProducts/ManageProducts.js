import React from 'react';
import './ManageProducts.css';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import useAuth from '../Context/useAuth';

const ManageProducts = () => {
    const {apartments, setApartments} = useAuth();
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete');
        if(proceed){
            const url = `https://secret-journey-23041.herokuapp.com/apartments/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
               
                if(data.deletedCount > 0) 
                    alert('Successfully deleted');
                    const remainingUser= apartments.filter(apartment =>apartment._id !== id)
                    setApartments(remainingUser);
                
            })
        }
    }
    return (
        <div>
            <h1>This is manage manage products side</h1>
            <Box sx={{ flexGrow: 1, ml:4 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {
                 apartments.map(apartment => <Grid key={apartment._id} style={{marginTop: '20px'}} item xs={12} sm={6} md={4}>
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
              <Button onClick={() =>handleDelete(apartment._id)} style={{marginLeft: '100px',
               border: '1px solid black',
               padding: '4px 8px', backgroundColor: '#0000FF', color: 'white',
               borderRadius: '15px'}} size="small" color="primary">
                Delete
              </Button>
            </CardActions>
          </Card>
            </Grid>)
              }
            </Grid>
            </Box>
        </div>
    );
};

export default ManageProducts;