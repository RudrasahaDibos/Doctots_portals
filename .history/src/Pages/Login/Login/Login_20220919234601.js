import React from 'react';
import { Link } from 'react-router-dom';
import Sociallogin from '../Sociallogin/Sociallogin';
import { useForm } from "react-hook-form";

const Login = () => {
      
   

    return (
        
        
        <div className="hero min-h-screen ">
  <div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} />
      {errors.firstName?.type === 'required' && "First name is required"}
      
      <input {...register("lastName", { required: true })} />
      {errors.lastName && <p>Last name is required</p>}

      <input {...register("mail", { required: "Email Address is required" })} />
      <p>{errors.mail?.message}</p>
      
      <input type="submit" />
    </form>
        <div className="form-control mt-2">
          <button className="btn btn-primary">Login</button>
          <h4>Please Create a Account? <Link to='/register' className='text-primary'>Go to Register</Link></h4>
        </div>
        <div className="flex flex-col w-full  border-opacity-50">
  <div className="divider">OR</div>
    <div className='grid h-20 card  rounded-box place-items-center'><Sociallogin ></Sociallogin></div>
</div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;