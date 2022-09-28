import React from 'react';
import Service from './Service';
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'

const Services = () => {
    return (
        <div>
              <div className='mt-16'>
              <p className=' text-sm text-center text-primary' >Our Service</p>
              <h2 className='text-center'>Service We Provide</h2>
              </div>
             <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12' >
              <Service cardtitle='Fluoride Treatment' img={cavity} ></Service>
              <Service cardtitle={} img={fluoride}></Service>
              <Service  img={whitening}></Service>
             </div>
        </div>
    );
};

export default Services;