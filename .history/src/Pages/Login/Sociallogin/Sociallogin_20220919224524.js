import React from 'react';
import {  useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
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

if(user){
    navigate('/home')
  }

    return (
        <div>
            <div className='mb-2 text-center text-red-900'>
            {errorelement}
            </div>
            <button onClick={handleWithGoogleSignIn} className="btn no-animation">CONTINUE WITH GOOGLE </button>
        </div>
    );
};

export default Sociallogin;