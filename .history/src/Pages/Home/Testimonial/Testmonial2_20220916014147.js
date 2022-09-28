import React from 'react';
import Testimonial from './Testimonial';

const Testmonial2 = () => {
    return (
        <div  className='mt-20 px-12'>
                <div className='flex'>
                <div>
                <p className='text-sm text-primary'>Testimonial</p>
               <h1>What Your Patients Says</h1>
                </div>
                <div className='ml-auto text-primary text-9xl'>
                    <h1>"</h1>
                </div>
                </div>
                <div className='grid grid-cols-1 min-h-screen px-  lg:grid-cols-3 lg:gap-2 lg:px-20 '>
                    <Testimonial></Testimonial>
                    <Testimonial></Testimonial>
                    <Testimonial></Testimonial>
                </div>
        </div>
    );
};

export default Testmonial2;