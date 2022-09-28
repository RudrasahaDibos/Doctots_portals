import React from 'react';
import appointment from '../../../assets/images/appointment.png'
const Contractus = () => {
    return (
        <div  style={{
            background:`url(${appointment})`}}
        
        className='justify-center text-center '>
          <h1 className='text-primary uppercase'>Contact us</h1>   
          <h1 className='text-3xl text-white' >Stay connected with us</h1>
        
<input type="text" placeholder="Email Adress" className="input input-bordered input-sm w-full max-w-xs" />
<br />
<br />
<input type="text" placeholder="Subject " className="input input-bordered input-md w-full max-w-xs" />
<br />
<br />
<input type="text" placeholder="Your message" className="input input-bordered input-lg w-full max-w-xs" />
<br />

<button className="btn  mt btn-primary">Submit</button>
        </div>
    );
};

export default Contractus;