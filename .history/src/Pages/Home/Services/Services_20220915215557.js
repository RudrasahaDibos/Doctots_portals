import React from 'react';

const Services = () => {
    return (
        <div>
              <div className='mt-16'>
              <p className=' text-sm text-center text-primary' >Our Service</p>
              <h2 className='text-center'>Service We Provide</h2>
              </div>
              <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Shoes!</h2>
       <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
</div>
        </div>
    );
};

export default Services;