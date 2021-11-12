import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import { Button } from '@mui/material';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import Pay from '../Pay/Pay';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddProducts from '../AddProducts/AddProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from './../Context/useAuth';
import './DashBoard.css';


const drawerWidth = 200;

const DashBoard = (props) => {
    const { window } = props;
    let {path, url} = useRouteMatch();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const {admin, logOut} = useAuth();
  // console.log(admin);

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
        <Button><Link className="home" to="/home">Home</Link></Button>
        <br />
       {!admin? <Box>
       <Button><Link className="products" to={`${url}/myOrders`}>My Orders</Link></Button>
        <br />
        <Button><Link className="products" to={`${url}/review`}>Review</Link></Button>
        <br />
        <Button><Link className="products" to={`${url}/pay`}>pay</Link></Button>
       </Box> :
        <Box>
        <Button> <Link style={{top: '10px'}} className="manageOrder" to={`${url}/manageOrders`}>Manage All Orders</Link></Button>
        <br />
        <Button><Link className="products" to={`${url}/manageProducts`}>Manage Products</Link></Button>
        <br />
        <Button><Link className="admin" to={`${url}/makeAdmin`}>Make Admin</Link></Button>
        <br />
        <Button><Link className="add" to={`${url}/addProducts`}>Add a products</Link></Button>
        </Box>}
        <br />
        <Button onClick={logOut} variant="contained">Logout</Button>
       
        
        
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
          
             <Route path={`${path}/manageOrders`}>
           <ManageOrders></ManageOrders>
          </Route>
          <Route path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/addProducts`}>
           <AddProducts></AddProducts>
          </Route>
           
            <Route path={`${path}/myOrders`}>
           <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/review`}>
           <Review></Review>
          </Route>
          <Route path={`${path}/pay`}>
           <Pay></Pay>
          </Route>
            
        
          {/* <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addDoctor`}>
            <AddDoctor></AddDoctor>
          </AdminRoute> */}
        </Switch>
        
      </Box>
    </Box>
    );
};

export default DashBoard;