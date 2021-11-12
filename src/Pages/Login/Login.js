import React, { useState } from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useHistory, useLocation} from 'react-router-dom';
import useAuth from '../Context/useAuth';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user,  LoginUser, isLoading, error} = useAuth();
    const location = useLocation();
    const history = useHistory();
     const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
     }
    const handleSubmit = e => {

        LoginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <div>
            <div>
                 <Header></Header>
             </div>
             <Container>
            <Grid container spacing={2}>
            <Grid sx={{mt: 8}} item xs={12} md={6}>
            <Typography variant="body1">Login</Typography>
            {!isLoading && <form onSubmit={handleSubmit}>
            <TextField 
            sx={{width: '75%', m: 1}}
            id="standard-basic" 
            label=" Your Email"
            name="email"
            onChange={handleOnChange} 
            variant="standard" />
            <TextField
             sx={{width: '75%', m: 1}}
             id="standard-basic" 
             label="Password"
             name="password"
             onChange={handleOnChange} 
             type="password"
             variant="standard" />
             <br />
              <Button  sx={{width: '75%', m: 1}} variant="contained" type="submit">Login</Button>
            </form>}
            {
                isLoading && <CircularProgress />
            }
            {user.email && <Alert severity="success">Successfully login!</Alert>}
         {error && <Alert severity="success">{error}</Alert>}
            <NavLink
            style={{textDecoration: 'none'}}
            to="/register">New user? Please Register</NavLink>

            {/* <p>-----------------------------------Or----------------------------</p>
             <Button onClick={handleGoogleSignIn} variant="contained">Google with Sign In</Button> */}
            </Grid>
            <Grid item xs={12} md={6}>
            <img style={{width: '100%'}} src="https://image.shutterstock.com/image-vector/man-key-near-computer-account-260nw-1499141258.jpg" alt="" />
            </Grid>
            </Grid>
        </Container>
             <div>
                 <Footer></Footer>
             </div>
        </div>
    );
};

export default Login;