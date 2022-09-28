import React from 'react';
import { Link } from 'react-router-dom';
import Sociallogin from '../Sociallogin/Sociallogin';
import { useForm } from "react-hook-form";

const Login = () => {
      
    const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

    return (
        
        
        <div className="hero min-h-screen ">
  <div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <form onSubmit={handleSubmit(onSubmit)}>

      <div className="form-control w-full max-w-xs">
  <label className="label">
   
    <span className="label-text-alt">Email</span>
  </label>
  <input type="email" 
     placeholder="Yours Email Address"
     className="input input-bordered w-full max-w-xs" 
     {...register("email", {
      required:{
         value:true,
         message:'Email is Required'
      },
      pattern: {
        value: /[A-Za-z]{3}/,
        message: 'Provide a valid Email'
      }
    })}
   
   
   />
  <label className="label">
    
    <span className="label-text-alt">Alt label</span>
  </label>
   </div>





      <input 
      {...register("email", { required: true })} />
     
     
      {errors.firstName?.type === 'required' && "First name is required"}
      
      <input {...register("lastName", { required: true })} />
      {errors.lastName && <p>Last name is required</p>}

      <input {...register("mail", { required: "Email Address is required" })} />
      <p>{errors.mail?.message}</p>
      
   
   
        <div className="form-control mt-2">
          <button className="btn btn-primary">Login</button>
          <h4>Please Create a Account? <Link to='/register' className='text-primary'>Go to Register</Link></h4>
        </div>
        </form>
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