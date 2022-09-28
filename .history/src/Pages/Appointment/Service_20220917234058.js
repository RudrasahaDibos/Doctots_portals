import React from 'react';

const Service = ({service}) => {
    const {name,slots}=service();
    return (
        <div>
              <h1>{Service.length}</h1>
        </div>
    );
};

export default Service;