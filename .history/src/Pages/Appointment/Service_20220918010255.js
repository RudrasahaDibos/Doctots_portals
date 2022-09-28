import React from 'react';

const Service = ({service}) => {
    const {name,slots}=service;
    return (
     

         
             <div className="card lg:max-w-lg w-96 bg-base-100 shadow-xl ">
             <div className="card-body">
            <h2 className="card-title text-primary">{name}</h2>
            <p>
                {slots.length>0? <span>{slots[0]}</span>: <span className='text-red-900'>Try Another Date </span>
                
                
                }
            </p>
            <p>{slots.length} {slots.length > 1 ? "spaces": "space"} Available</p>
            <div className="card-actions justify-center">
            <button 
            
            
            className=""></button>
            <label for="my-modal-3" disabled={slots.length === 0}
            onClick={()=>settreatment(service)} className="btn modal-button btn btn-primary">Book Appointment</label>
            </div>
           </div>
        </div>
         
                  
    );
};

export default Service;