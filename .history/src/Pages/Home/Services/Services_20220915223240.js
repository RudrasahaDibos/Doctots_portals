import React from 'react';
import Service from './Service';
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceBaner from './ServiceBaner';

const Services = () => {
    return (
        <div>
              <div className='mt-16'>
              <p className=' text-sm text-center text-primary' >Our Service</p>
              <h2 className='text-center'>Service We Provide</h2>
              </div>
             <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 px-12 mt-7' >
              <Service cardtitle='Fluoride Treatment' img={cavity} ></Service>
              <Service cardtitle='Cavity Filling' img={fluoride}></Service>
              <Service  cardtitle='Teeth Whitening' img={whitening}></Service>
              
             </div>
             <div className='px-12'>
             <ServiceBaner></ServiceBaner>
             </div>
        </div>
    );
};

export default Services;