import React from 'react';

const Service = ({img,cardtitle}) => {
    return (
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
                
              </div>
    );
};

export default Service;