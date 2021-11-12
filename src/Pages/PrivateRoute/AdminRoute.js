import React from 'react';
import useAuth from './../Context/useAuth';
import { Route, Redirect} from 'react-router-dom';

const AdminRoute = ({children, ...rest}) => {
    const {user, isLogin, admin} = useAuth();
    if(isLogin) {
        return 'loading...';
    }
    return (
        <Route
        {...rest}
        render = {({location})=> user.email && admin? children : 
        <Redirect
        to = {{
            pathname: '/home',
            state: {from: location}
        }}
        
        ></Redirect>
     }
        
        
        >
 
        </Route>
    );
};

export default AdminRoute;