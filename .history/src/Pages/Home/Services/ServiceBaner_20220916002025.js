import React from 'react';

const ServiceBaner = ({img}) => {
    return (
        <div>
               <div className="hero min-h-screen ">
     <div className="hero-content flex-col lg:flex-row">
    <img  src={img} className="max-w-sm sm:ml rounded-lg shadow-2xl" />
    <div className='ml-20'>
      <h1 className="text-5xl  font-bold">Exceptional Detal Care, On Yours Terms</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceBaner;