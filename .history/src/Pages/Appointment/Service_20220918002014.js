import React from 'react';

const Service = ({service}) => {
    const {name,slots}=service;
    return (
     

         
             <div className="card lg:max-w-lg w-96 bg-base-100 shadow-xl ">
             <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>
                {slots.length>0? <span>{slots[0]}</span>: <span className=''>Try Another Date </span>
                
                
                }
            </p>
            <p>{slots.length} {slots.length > 1 ? "spaces": "space"} Available</p>
            <div className="card-actions justify-end">
            <button disabled={slots.length === 0} className="btn btn-primary">Book Appointment</button>
            </div>
           </div>
        </div>
         
                  
    );
};

export default Service;