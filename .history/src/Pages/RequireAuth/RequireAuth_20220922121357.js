import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const RequireAuth = ({children}) => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const [user, loading] = useAuthState(auth);
    const location =useLocation();
    
   if(loading){
    return <Loading></Loading>
   }
     
   if(!user){
    return <Navigate to="/login" state={{ from: location }} replace />;
   }
   
   if(!user.emailVerified){
    return <div>
             <h1>Your Email is not Verify </h1>
              <h2>Please verify </h2>
              <button 
     onClick={async () => {
       await sendEmailVerification();
       alert('Sent email');
     }}
     class="btn btn-success"
   >
     Verify email
   </button>
   <ToastContainer></ToastContainer>
    </div>
}




    return children;
};

export default RequireAuth;