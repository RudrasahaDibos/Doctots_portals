import { format } from 'date-fns';
import React from 'react';

const Appointmentservice = ({date}) => {
    return (
        <div>
               <h4>Available Services on{format(date,'MMMM d, yyyy h:mm aa')}</h4>
        </div>
    );
};

export default Appointmentservice;