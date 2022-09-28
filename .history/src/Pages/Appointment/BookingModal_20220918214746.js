import React from 'react';

const BookingModal = ({treatment}) => {
    const{name,slots}=treatment;
    return (
        <div>
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label for="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold text-primary">{name}</h3>
       <form >

        

<input type="text" placeholder="Type here" className="input input-bordered input-xs w-full max-w-xs" />
<!-- sm -->
<input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
<!-- md -->
<input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />
<!-- lg -->
<input type="text" placeholder="Type here" className="input input-bordered input-lg w-full max-w-xs" />
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