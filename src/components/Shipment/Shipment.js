import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import "./Shipment.css";

const Shipment = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
   
    <form className = "ship-form" onSubmit={handleSubmit(onSubmit)}>
    
    
      
     
      <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeHolder = "Your Name" />
     
      {errors.name && <span className = "error">Name is required</span>}
      
      <input name="email" defaultValue = {loggedInUser.email} ref={register({ required: true })} placeHolder = "Your Email" />
     
      {errors.name && <span className = "error">Email is required</span>}
      
      <input name="address" ref={register({ required: true })} placeHolder = "Your Address" />
     
      {errors.name && <span className = "error">Address is required</span>}

      <input name="phone" ref={register({ required: true })} placeHolder = "Your Phone Number" />
     
      {errors.name && <span className = "error">Phone number is required</span>}
      
      
      <input type="submit" />
    </form>
  );
};

export default Shipment;