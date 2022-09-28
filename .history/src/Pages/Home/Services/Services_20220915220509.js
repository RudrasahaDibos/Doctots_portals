import React from 'react';
import Service from './Service';
import cavity from '../../../assets/images/cavity.png'
import fl from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'

const Services = () => {
    return (
        <div>
              <div className='mt-16'>
              <p className=' text-sm text-center text-primary' >Our Service</p>
              <h2 className='text-center'>Service We Provide</h2>
              </div>
             <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12' >
              <Service img={cavity} ></Service>
              <Service></Service>
              <Service></Service>
             </div>
        </div>
    );
};

export default Services;