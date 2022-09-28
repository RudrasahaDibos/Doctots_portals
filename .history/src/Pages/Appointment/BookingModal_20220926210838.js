import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {  toast } from 'react-toastify';

const BookingModal = ({treatment,date,settreatment}) => {
  const [user, loading] = useAuthState(auth);
    const{_id,name,slots}=treatment;
    const formatedate = format(date, 'MMMM d, yyyy ')
    
    const handalesubmit =event=>{
      event.preventDefault();
      const slot = event.target.slot.value;
      console.log(slot,_id,name);
      const booking = {
                  treatment:_id,
                  treatment:name,
                 date: formatedate,
                  slot,
                 patient:user.email,
                 patientName:user.displayName,
               phone:event.target.phone.value
    
       }
       fetch('http://localhost:5000/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data); 

       if(data.success){
         toast(`Appointment is set ${formatedate}at${slot}`)
         toast.error()
       }

             settreatment(null);
         
        })
  

      
    }


    return (
        <div className=''>
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold text-primary">{name}</h3>
       <form onSubmit={handalesubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-2'  >

        

<input type="text" disabled value={format(date,'MMMM d, yyyy ')} className='mt-4' class="input input-bordered input-md w-full max-w-xs" />
<select name='slot'  className="select select-bordered w-full max-w-xs">
  {
    slots.map((slot,index)=><option 
    key={index}
    value={slot}>{slot}</option>)
  }
 
</select>

<input type="text" name='name'  className='mt-2' disabled  value={user?.displayName || ''} class="input input-bordered input-md w-full max-w-xs" />

<input type="text"   name='phone' className='mt-2' placeholder="Phone Number" class="input input-bordered input-md w-full max-w-xs" />
<input type="email"  name='email' className='mt-2' disabled value={user?.email || ''} class="input input-bordered input-md w-full max-w-xs" />
<input type="Submit"  value='Submit' className="input input-bordered input-md w-full max-w-xs btn btn-accent " />

       </form>
    
  
  </div>
  
</div>     
        </div>
    );
};

export default BookingModal;