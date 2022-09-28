import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
      


    return (
        
        
        <div className="hero min-h-screen ">
  <div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <h4>Please Create a Account <Link to='/register' className='text-primary'>Go to Register</Link></h4>
        </div>

        <div className="flex flex-col w-full border-opacity-50">
  <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
  <div className="divider">OR</div>
  <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
</div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;