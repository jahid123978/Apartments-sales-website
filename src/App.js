import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import AboutUs from './Pages/AboutUs/AboutUs';
import AuthProvider from './Pages/Context/AuthProvider';
import DashBoard from './Pages/Dashboard/DashBoard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Products from './Pages/Products/Products';
import UpdateStatus from './Pages/UpdateStatus/UpdateStatus';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      {/* <Header></Header> */}
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route path="/products">
          <Products></Products>
        </Route>
        <PrivateRoute path="/dashboard">
        <DashBoard></DashBoard>
        </PrivateRoute>
        <Route path="/login">
         <Login></Login>
        </Route>
        <Route path="/register">
         <Register></Register>
        </Route>
        <PrivateRoute path="/place/:placedId">
         <PlaceOrder></PlaceOrder>
        </PrivateRoute>
        <Route path="/allOrders/:updateId">
         <UpdateStatus></UpdateStatus>
        </Route>
        <Route path="/aboutUs">
         <AboutUs></AboutUs>
        </Route>
      </Switch>
      {/* <Footer></Footer> */}
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
