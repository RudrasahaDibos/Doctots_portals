import React from 'react';
import {  useSignInWithGoogle} from 'react-firebase-hooks/auth';

const Sociallogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
    return (
        <div>
            <button className="btn no-animation">CONTINUE WITH GOOGLE </button>
        </div>
    );
};

export default Sociallogin;