import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Context/useAuth';
// import useAuth from '../Context/useAuth';
import './Header.css';
import { Bars, Nav, NavMenu, NavLink } from './NavbarElements';

const Header = () => {
    const {user, logOut, isLogin} = useAuth();
    // console.log(user);
    return (
         <>
        <Nav>
          <Bars />
    
          <NavMenu>
            <NavLink to='/home' activeStyle>
             Home
            </NavLink>
            <NavLink to='/products' activeStyle>
              Products
            </NavLink>
            {/* {user.displayName && <NavLink to='/my-orders' activeStyle>
              Manage-Orders
            </NavLink>} */}
            <NavLink to='/dashboard' activeStyle>
              Dashboard
            </NavLink>
           {/* {user.displayName && <NavLink to='/manage-orders' activeStyle>
              My-Orders
            </NavLink>} */}
             
           {/* {user.displayName && <NavLink to='/add-services' activeStyle>
              Add-Services
            </NavLink>} */}
            <NavLink to='/aboutUs' activeStyle>
             About-Us
            </NavLink>
            
          </NavMenu>
         
         <NavMenu to="">
         {user.email && <Link style={{marginRight: '10px', color: 'white', textDecoration: 'none'}} to="">{user.displayName}</Link>}
          {user.email? <button style={{borderRadius: '5px', padding: '5px 10px', backgroundColor: '#63D471', color: 'white', border: 'none'}} onClick={logOut}>Logout</button> :
          <Link style={{color: 'white', textDecoration: 'none'}} to="/login">Login</Link>}
         </NavMenu>
          
        </Nav>
      </>
    );
};

export default Header;