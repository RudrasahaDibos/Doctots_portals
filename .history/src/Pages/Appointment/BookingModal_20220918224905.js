import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({treatment,date}) => {
    const{name,slots}=treatment;
    
    const handalesubmit =event=>{
      event.preventDefault()
    }


    return (
        <div className=''>
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label for="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold text-primary">{name}</h3>
       <form onsu className='grid grid-cols-1 gap-3 justify-items-center mt-2'  >

        

<input type="text" value={format(date,'MMMM d, yyyy ')} className='mt-4'  className="input input-bordered input-md w-full max-w-xs" />
<select className="select select-bordered w-full max-w-xs">
  {
    slots.map(slot=><option>{slot}</option>)
  }
 
</select>

<input type="text"  className='mt-2' placeholder="Full Name " className="input input-bordered input-md w-full max-w-xs" />

<input type="number"  className='mt-2' placeholder="Phone Number" className="input input-bordered input-md w-full max-w-xs" />
<input type="email"  className='mt-2'  placeholder="Email Address" className="input input-bordered input-md w-full max-w-xs" />
<input type="Submit"  value='Submit' className="input input-bordered input-md w-full max-w-xs btn btn-accent " />

       </form>
    
  
  </div>
  
</div>     
        </div>
    );
};

export default BookingModal;