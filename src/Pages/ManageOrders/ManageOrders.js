import React, { useEffect, useState } from 'react';
import './ManageOrders.css';
import useAuth from './../Context/useAuth';
import { Box, Grid } from '@mui/material';
import Orders from '../Orders/Orders';

const ManageOrders = () => {
    const [manageOrder, setManageOrder] = useState([]);
    // const {manageOrder} = useAuth();
    useEffect(() => {
        fetch('https://secret-journey-23041.herokuapp.com/allOrders')
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            setManageOrder(data);
        })
    
       }, []);

       const handleDelete = (id) =>{
            const proceed = window.confirm('Are you sure you want to delete');
            if(proceed)
            {
                const url = `https://secret-journey-23041.herokuapp.com/allOrders/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                 .then(res => res.json())
                 .then(data =>{
                      if(data.deletedCount > 0)
                      {
                        alert("Successfully deleted")
                        const remaining = manageOrder.filter(order => order._id !== id);
                        setManageOrder(remaining);
                      }
                     
                 })
            }
       }
    return (
        <div>
            <h1>Manage Orders</h1>
            <h1>Orders Length: {manageOrder.length}</h1>
            <Box sx={{ flexGrow: 1, ml:4 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
               {
                   manageOrder.map(order => <Orders
                   key={order._id}
                   order={order}
                   handleDelete= {handleDelete}
                   ></Orders>)
               }
            </Grid>
            </Box>
        </div>
    );
};

export default ManageOrders;