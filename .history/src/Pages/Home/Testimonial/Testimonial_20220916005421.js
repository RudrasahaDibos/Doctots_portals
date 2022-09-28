import React from 'react';

const Testimonial = () => {
    return (
        <div className='mt-20 px-12' >
               <p className='text-sm text-primary'>Testimonial</p>
               <h1>What Your Patients Says</h1>
               <div>
               <div className="card w-96 bg-base-100 shadow-xl">
  
  <div className="card-body items-center text-center">
    
    <p>If a dog chews shoes whose shoes does he choose?</p>

    <div className="avatar flex">
  <div className="w h-20 mr-24 mt-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://placeimg.com/192/192/people" />
  </div>
  <div className='ml-[-20px] mt-24'>
      <h1>Dibos</h1>
  </div>
</div>
    
  </div>
</div>
               </div>
        </div>
    );
};

export default Testimonial;