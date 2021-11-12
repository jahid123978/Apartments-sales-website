import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../Context/useAuth';
import './Review.css';

const Review = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        console.log(data);
        console.log(data.name);
       //  history.push(`/manage-orders`)
       const userDetails = {name: data.name, image: data.image, name1: data.text, rating: data.number, description: data.description}; 
       fetch('https://secret-journey-23041.herokuapp.com/reviews', {
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
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        
        
    <label style={{marginLeft: '140px'}} className="name">Name</label>
    <br />
  <input style={{padding: '10px', borderRadius: '20px'}} defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} />
    <br />
    <label style={{marginLeft: '240px'}} className="name">Your image address</label>
    <br />
    <input style={{padding: '10px', borderRadius: '20px'}} placeholder="image address"  {...register("image", { required: true, })} /> 
    <br />
    <label style={{marginLeft: '200px'}} className="Product name">Service Name</label>
    <br />
    <input style={{padding: '10px', borderRadius: '20px'}} placeholder="Product name"  {...register("text", { required: true, })} />
    <br />
  <label style={{marginLeft: '150px'}} className="phone">Rating Number</label>
  <br />
  <input style={{padding: '10px', borderRadius: '20px'}} placeholder="Rating number" type="number" {...register("number", )} />
   <br />
   <label style={{marginLeft: '190px'}} className="city" htmlFor="">Description</label>
   <br />
  <input style={{padding: '20px', borderRadius: '20px'}} placeholder="Description" {...register("description")} />
  <br />
  <input style={{padding: '10px', width:"50%"}} className="placeOrder" type="submit" value="Review"/>
</form>
    );
};

export default Review;