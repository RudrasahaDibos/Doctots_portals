import React from 'react';
import {  useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Sociallogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   

    
    return (
        <div>
            <button onClick={handleWithGoogleSignIn} className="btn no-animation">CONTINUE WITH GOOGLE </button>
        </div>
    );
};

export default Sociallogin;