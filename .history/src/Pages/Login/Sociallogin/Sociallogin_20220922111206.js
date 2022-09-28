import React from 'react';
import {  useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Sociallogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
   const handleWithGoogleSignIn=()=>{
        signInWithGoogle('');

    }
    let errorelement;
    if (error) {
  
       errorelement =<div>
           <small className='text-red'> {error.message}</small>
         </div>
    }
    const location =useLocation();
    let from = location.state?.from?.pathname || "/";

if(user){
    navigate(from, { replace: true });
  }

    return (
        <div className='justify-items-center text-center '>
          
           
 <button onClick={handleWithGoogleSignIn} className="btn no-animation">CONTINUE WITH GOOGLE </button>
           
               <small className='text-red-600'>{errorelement}</small>
              
        </div>
    );
};

export default Sociallogin;