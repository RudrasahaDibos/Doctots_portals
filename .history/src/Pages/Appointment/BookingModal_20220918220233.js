import React from 'react';

const BookingModal = ({treatment}) => {
    const{name,slots}=treatment;
    return (
        <div className='h-24'>
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label for="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold text-primary">{name}</h3>
       <form className='mx-auto px-12 gi' >

        

<input type="text" className='mt-4' placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />
<input type="text"  className='mt-2' placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />

<input type="text"  className='mt-2' placeholder="Full Name " className="input input-bordered input-md w-full max-w-xs" />

<input type="number"  className='mt-2' placeholder="Phone Number" className="input input-bordered input-md w-full max-w-xs" />
<input type="email"  className='mt-2'  placeholder="Email Address" className="input input-bordered input-md w-full max-w-xs" />
<input type="Submit"  value='Submit' className="input input-bordered input-md ml-28" />

       </form>
    <div className="modal-action">
      <label for="my-modal-3" className="btn">Yay!</label>
    </div>
  
  </div>
  
</div>     
        </div>
    );
};

export default BookingModal;