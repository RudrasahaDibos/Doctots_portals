import React from 'react';

const Service = ({service}) => {
    const {name,slots}=service;
    return (
        <div>

                    <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
</div>
        </div>
    );
};

export default Service;