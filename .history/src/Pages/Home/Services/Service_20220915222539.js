import React from 'react';

const Service = ({img,cardtitle}) => {
    return (
       < div>
        <div className="card w-80 bg-base-100 shadow-2xl">
        <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center ">
        <h2 className="card-title">{cardtitle}</h2>
       <p className='text-center'>If a dog chews shoes whose shoes does he choose?</p>
             </div>
              </div>
                  <div>
                  <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
                  </div>

              </div>
                  
    );
};

export default Service;