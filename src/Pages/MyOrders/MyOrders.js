import React, { useEffect, useState } from 'react';
import './MyOrders.css';
import { Box, Grid } from '@mui/material';
import useAuth from '../Context/useAuth';
import Orders from '../Orders/Orders';

const MyOrders = () => {
    const {user} = useAuth();
    const [myOrder, setMyOrder] = useState([]);
    console.log(user.email);
    useEffect(() => {
        fetch(`https://secret-journey-23041.herokuapp.com/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            setMyOrder(data);
            console.log(data);
        })
    
       }, [user.email]);
       
       const handleDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete');
        if(proceed){
            const url = `https://secret-journey-23041.herokuapp.com/allOrders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    alert("Successfully deleted");
                    const remaining = myOrder.filter(order => order._id !== id);
                    setMyOrder(remaining);
                }
            })
        }
           
       }
    
    return (
        <div>
            <h1>Your Orders</h1>
            <h1>Orders Length: {myOrder.length}</h1>
            <Box sx={{ flexGrow: 1, ml:4 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
               {
                   myOrder.map(order => <Orders
                   key={order._id}
                   order ={order}
                   handleDelete={handleDelete}
                   ></Orders>)
               }
            </Grid>
            </Box>
        </div>
    );
};

export default MyOrders;