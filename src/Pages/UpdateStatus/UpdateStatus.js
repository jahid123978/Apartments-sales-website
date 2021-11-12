import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateStatus = () => {
    const [update, setUpdate] = useState({});
    const {updateId} = useParams();
    // useEffect(()=>{
    //      fetch(`http://localhost:2000/allOrders/${updateId}`)
    //      .then(res => res.json())
    //      .then(data =>{
    //          setUpdate(data);
    //      })
    // }, [])

    const handleOnChange = (e) => {
        const updateStatus = e.target.value;
        console.log(updateStatus);
        const newUpdateStatus = {status: updateStatus};
        setUpdate(newUpdateStatus);
        e.preventDefault();
    }

    const handleStatus = () =>{
    fetch(`https://secret-journey-23041.herokuapp.com/allOrders/${updateId}`, {
        method: 'PUT',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(update)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
    })
    // e.preventDefault();
    }
    return (
        <div>
            <h1>ID: {updateId}</h1>
            <h1>This is update status side</h1>
            <form onSubmit={handleStatus}>
                <TextField variant="standard"
                 id="standard-basic" 
                 label="status"
                 type="status"
                 onChange={handleOnChange}
                 ></TextField>
                 <Button type="submit" variant="contained">Update Status</Button>
            </form>
        </div>
    );
};

export default UpdateStatus;