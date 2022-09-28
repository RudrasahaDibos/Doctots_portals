import { format } from 'date-fns';
import React from 'react';

const Appointmentservice = ({date}) => {
    const [ser]
    return (
        <div>
               <h4 className='mx-auto text-primary text-2xl text-center '>Available Services on {format(date,'MMMM d, yyyy ')}</h4>
        </div>
    );
};

export default Appointmentservice;