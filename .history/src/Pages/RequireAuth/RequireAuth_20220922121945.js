import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

return  <div class="card w-96 bg-neutral text-neutral-content">
<div class="card-body items-center text-center">
  <h2 class="card-title">Your email is not Verify</h2>
  <p>Please</p>
  <div class="card-actions justify-end">
    <button class="btn btn-primary">Accept</button>
    <button class="btn btn-ghost">Deny</button>
  </div>
</div>
</div>





//     return <div >
//              <h1>Your Email is not Verify </h1>
//               <h2>Please verify </h2>
//               <button 
//      onClick={async () => {
//        await sendEmailVerification();
//       toast('Sent email');
//      }}
//      class="btn btn-success"
//    >
//      Verify email
//    </button>
//    <ToastContainer></ToastContainer>
//     </div>
}




    return children;
};

export default RequireAuth;