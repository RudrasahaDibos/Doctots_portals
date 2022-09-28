import React from 'react';
import Service from './Service';


const Services = () => {
    return (
        <div>
              <div className='mt-16'>
              <p className=' text-sm text-center text-primary' >Our Service</p>
              <h2 className='text-center'>Service We Provide</h2>
              </div>
             <div className='' >
             <Service></Service>
              <Service></Service>
              <Service></Service>
             </div>
        </div>
    );
};

export default Services;