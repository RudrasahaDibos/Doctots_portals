import { format } from 'date-fns';
import React from 'react';

const Appointmentservice = ({date}) => {
    return (
        <div>
               <h4 className='mx-auto text-primary '>Available Services on {format(date,'MMMM d, yyyy ')}</h4>
        </div>
    );
};

export default Appointmentservice;