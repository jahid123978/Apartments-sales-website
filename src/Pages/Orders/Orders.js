import React, { useState } from 'react';
import { Grid, CardActionArea, CardActions,
     Button, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Orders = ({order, handleDelete}) => {
  const [pending, setPending] = useState(false);
  const handelStatus = () =>{
    setPending(true);
  }
    return (
        <Grid style={{marginTop: '20px'}} item xs={12} sm={6} md={4}>
             <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250px"
            image={order.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {order.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {order.email}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {order.name1}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              ${order.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {order.description}
            </Typography>
           
          </CardContent>
        </CardActionArea>
        {pending? <inputField style={{color: 'white', backgroundColor: 'tomato', borderRadius: '5px', padding: '2px 10px', border: '1px solid black'}}>
               Shipped..
            </inputField> :
            <inputField style={{color: 'white', backgroundColor: 'tomato', borderRadius: '5px', padding: '2px 10px', border: '1px solid black'}}>
              Pending..
            </inputField>}
        <CardActions>
          <Button onClick={()=>handleDelete(order._id)} style={{marginLeft: '50px',
           border: '1px solid black',
           padding: '4px 8px', backgroundColor: '#0000FF', color: 'white',
           borderRadius: '15px'}} size="small" color="primary">
            Delete
          </Button>
          <Button onClick={handelStatus} style={{marginLeft: '10px',
           border: '1px solid black',
           padding: '4px 8px', backgroundColor: '#0000FF', color: 'white',
           borderRadius: '15px'}} size="small" color="primary">
            Update Status
          </Button>
        </CardActions>
      </Card>
        </Grid>
    );
};

export default Orders;