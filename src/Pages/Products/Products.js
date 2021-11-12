import React from 'react';
import useAuth from '../Context/useAuth';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Grid } from '@mui/material';
import ApartmentCard from './ApartmentCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Products = () => {
   
    const {apartments} = useAuth();
    return (
        <div>
              <div>
               <Header></Header>
           </div>
            <Box sx={{ flexGrow: 1, ml:4 }}>
                <h1>Our Beautiful Apartments Here You can choose any of them and purchese</h1>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {
               apartments.map(apartment => <ApartmentCard
               key={apartment._id}
               apartment={apartment}
               ></ApartmentCard>)
           }
      </Grid>
    </Box>
           <div>
               <Footer></Footer>
           </div>
        </div>
    );
};

export default Products;