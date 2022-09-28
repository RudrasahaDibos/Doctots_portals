import React from 'react';

const Service = ({service}) => {
    const {name,slots}=service;
    return (
        <div>
              <h1>{name}</h1>
              
        </div>
    );
};

export default Service;