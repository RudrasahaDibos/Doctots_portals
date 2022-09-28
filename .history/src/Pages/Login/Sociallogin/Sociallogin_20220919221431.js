import React from 'react';
import {  useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Sociallogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   
   const handleWithGoogleSignIn=()=>{
        signInWithGoogle('');

    }
    let errorelement;
    if (error) {
  
       errorelement =<div>
           <p className='text-danger'>Error: {error?.message}</p>
         </div>

    return (
        <div>
            {errorelement}
            <button onClick={handleWithGoogleSignIn} className="btn no-animation">CONTINUE WITH GOOGLE </button>
        </div>
    );
};

export default Sociallogin;