import React from 'react';
import {  useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Sociallogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   
    handleWithGoogleSignIn=event=>{
        event.preventDefault();

    }
    let errorelement;
    if (error) {
  
       errorelement =<div>
           <p className='text-danger'>Error: {error?.message}{error1?.message}</p>
         </div>

    return (
        <div>
            <button onClick={handleWithGoogleSignIn} className="btn no-animation">CONTINUE WITH GOOGLE </button>
        </div>
    );
};

export default Sociallogin;