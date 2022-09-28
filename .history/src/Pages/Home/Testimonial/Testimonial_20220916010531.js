import React from 'react';

const Testimonial = () => {
    return (
        <div className='mt-20 px-12' >
                <div className='flex'>
                <div>
                <p className='text-sm text-primary'>Testimonial</p>
               <h1>What Your Patients Says</h1>
                </div>
                <div className='ml-auto text-primary text-9xl'>
                    <h1>"</h1>
                </div>
                </div>





               <div>
               <div className="card w-96 bg-base-100 shadow-xl">
  
        <div className="card-body items-center text-center">
    
    <p>If a dog chews shoes whose shoes does he choose?</p>

    <div className="avatar flex">
  <div className=" w-20 h-20 mr-[200px] mt-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://placeimg.com/192/192/people" />
  </div>
  <div className='ml-[-150px] mt-24'>
      <h1 className='text-xl'>Dibos saha</h1>
      <p>Dhaka</p>
  </div>
</div>
    
  </div>
</div>
               </div>
        </div>
    );
};

export default Testimonial;