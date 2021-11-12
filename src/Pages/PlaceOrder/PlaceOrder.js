import React from 'react';
import './PlaceOrder.css';
import { useHistory, useParams} from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from './../Context/useAuth';
import { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const PlaceOrder = () => {
    const history = useHistory();
    const [details, setDetails] = useState([]);
    const {placedId} = useParams();
    const { register, handleSubmit, reset } = useForm();
    const {user, apartments} = useAuth();
    useEffect(()=>{ 
        const detailsService = apartments.find(use => use._id == placedId)
        setDetails(detailsService)
    },[apartments])

    const onSubmit = data =>{
        console.log(data);
        console.log(data.name);
       //  history.push(`/manage-orders`)
       const userDetails = {status: 'pending', image: details.img, name1: details.name, price: details.price, description: details.description, name: data.name, email: data.email, phone: data.phone, address: data.address, city: data.city}; 
       fetch('https://secret-journey-23041.herokuapp.com/orders', {
         method: 'POST',
         headers : {
           'content-type': 'application/json'
         },
          body : JSON.stringify(userDetails)
       })
       .then(res => res.json())
       .then(data =>{
        
           alert('Successfully inserted details');
           reset();
         
   
       })
       
       };
    return (
        <div>
          <div>
            <Header></Header>
          </div>
          <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
            <img style={{width: '800px', height: '400px'}} src={details.img} alt="" />
            <h1>Name: {details.name}</h1>
            <h2>Price: ${details.price}</h2>
            <h3 style={{margin: '1px 80px'}}>Description: {details.description}</h3>
            {/* <h1>PlacedId: {placedId}</h1> */}
            
        <label className="name">Name</label>
        <br />
      <input style={{padding: '10px', borderRadius: '20px'}} defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} />
        <br />
     <label className="email">Email</label>
      <br />
      <input style={{padding: '10px', borderRadius: '20px'}} defaultValue={user.email} {...register("email")} />
      <br />
      <label className="phone">Phone Number</label>
      <br />
      <input style={{padding: '10px', borderRadius: '20px'}} placeholder="Phone Number" type="number" {...register("number", )} />
       <br />
       <label className="city" htmlFor="">City</label>
       <br />
      <input style={{padding: '10px', borderRadius: '20px'}} placeholder="City" {...register("city")} />
      <br />
      <label className="address" htmlFor="">Address</label>
      <br />
      <input style={{padding: '10px', borderRadius: '20px'}} placeholder="address" {...register("address")} />
        <br />
      <input style={{padding: '10px', width:"50%"}} className="placeOrder" type="submit" value="PlaceOrder"/>
    </form>

        <div>
          <Footer></Footer>
        </div>
        </div>
    );
};

export default PlaceOrder;