import React from 'react';

const Service = ({service}) => {
    const {name,slots}=service;
    return (
     

         
             <div className="card lg:max-w-lg w-96 bg-base-100 shadow-xl ">
             <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{slots.length} spaces aa</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            </div>
           </div>
        </div>
         
                  
    );
};

export default Service;