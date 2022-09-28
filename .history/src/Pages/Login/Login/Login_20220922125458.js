import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Sociallogin from '../Sociallogin/Sociallogin';
import { useForm } from "react-hook-form";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {

      
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate=useNavigate();
    const location =useLocation();
    let from = location.state?.from?.pathname || "/";
    if(loading){
      return <Loading></Loading>
    }
    const [sendPasswordResetEmail, sending,senderror] = useSendPasswordResetEmail(auth);
    let elemnterror;
    if(error){
         elemnterror= <p className='text-red-500'>{error.message}</p>
    }
   
    if(user){
      navigate(from, { replace: true });
    }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.Password)
  }

 

  


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
  <input  type="email" 
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
  {errors.email?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.email.message}</span>}
  {errors.email?.type === 'pattern' &&  <span className="label-text-alt text-red-500">{errors.email.message}</span>}
   
  </label>
   </div>
   
   <div className="form-control w-full max-w-xs">
  <label className="label">
   
    <span className="label-text-alt">Password</span>
  </label>
  <input type="Password" 
     placeholder="Yours Password Address"
     className="input input-bordered w-full max-w-xs" 
     {...register("Password", {
      required:{
         value:true,
         message:'Password is Required'
      },
      minLength: {
        value: 6,
        message: 'Must be 6 Charecters Or LOnger'
      }
    })}
   
   
   />
  <label className="label">
  {errors.Password?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.Password.message}</span>}
  {errors.Password?.type === 'minLength' &&  <span className="label-text-alt text-red-500">{errors.Password.message}</span>}
   
  </label>
  <label class="label">
            <a href="#" onClick={handlerestpassword} class="label-text-alt link link-hover">Forgot password?</a>
          </label>
   </div>






      
      
      {elemnterror}
      
   
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
  <ToastContainer></ToastContainer>
</div>
    );
};

export default Login;