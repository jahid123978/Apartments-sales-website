import React, { useState } from 'react';
import './Register.css';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../Context/useAuth';
import { useHistory, useLocation } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const location = useLocation();

    const {user,  RegisterNewUser, isLoading, error} = useAuth();
    const handleOnBlur = e => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
     }
    const handleSubmit = e => {
        // setIsLoading(false);
        e.preventDefault();
        if(loginData.password !== loginData.password2){
            alert('Your password did not match');
            return;
        }
        RegisterNewUser(loginData.name, loginData.email, loginData.password, history);
       
    }
    return (
       <div>
           <div>
                <Header></Header>
            </div>
            <Container>
        <Grid container spacing={2}>
        <Grid sx={{mt: 8}} item xs={12} md={6}>
        <Typography variant="body1">Register</Typography>
       {!isLoading? <form onSubmit={handleSubmit}>
        <TextField 
        sx={{width: '75%', m: 1}}
        id="standard-basic" 
        label=" Your Name"
        name="name"
        onBlur={handleOnBlur} 
        variant="standard" />
        <TextField 
        sx={{width: '75%', m: 1}}
        id="standard-basic" 
        label=" Your Email"
        name="email"
        onBlur={handleOnBlur} 
        variant="standard" />
        <TextField
         sx={{width: '75%', m: 1}}
         id="standard-basic" 
         label="Password"
         name="password"
         onBlur={handleOnBlur} 
         type="password"
         variant="standard" />
        <TextField
         sx={{width: '75%', m: 1}}
         id="standard-basic" 
         label="Re-type Password"
         name="password2"
         onBlur={handleOnBlur} 
         type="password"
         variant="standard" />
         <br />
          <Button  sx={{width: '75%', m: 1}} variant="contained" type="submit">Register</Button>
        </form> : <CircularProgress />}
         {user.email && <Alert severity="success">This is a success register!</Alert>}
         {error && <Alert severity="success">This is not valid email!</Alert>}
        <NavLink
        style={{textDecoration: 'none'}}
        to="/login">Already Registered? Please Login</NavLink>
        </Grid>
        <Grid item xs={12} md={6}>
        <img style={{width: '100%', height: '550px'}} src="https://wpeverest.com/blog/wp-content/uploads/2019/11/Best-Free-WordPress-Registration-Plugins.jpg" alt="" />
        </Grid>
        </Grid>
    </Container>
          <div>
             <Footer></Footer>
         </div>
       </div>
    );
};

export default Register;