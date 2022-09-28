import React from 'react';

const Contractus = () => {
    return (
        <div 
        
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
<br />
<button className="btn btn-primary">Get Started</button>
        </div>
    );
};

export default Contractus;