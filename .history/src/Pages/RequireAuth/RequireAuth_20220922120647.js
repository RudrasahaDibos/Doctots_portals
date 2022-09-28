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
       alert(<div class="alert alert-success shadow-lg">
       <div>
         <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
         <span>Your purchase has been confirmed!</span>
       </div>
     </div>};
     }}
     class="btn btn-success"
   >
     Verify email
   </button>
    </div>
}




    return children;
};

export default RequireAuth;