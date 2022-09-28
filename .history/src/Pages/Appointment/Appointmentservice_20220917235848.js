import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from './Service';

const Appointmentservice = ({date}) => {
    const [services ,setservices]= useState([])
    useEffect(()=>{
        fetch('Service.json')
        .then(res=>res.json())
        .then(data=>setservices(data))
    },[])
    return (
        <div>
               <h4 className='mx-auto text-primary text-2xl text-center '>Available Services on {format(date,'MMMM d, yyyy ')}</h4>
           <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 p'>
           {
                services.map(service=><Service 
                key={service._id}
                service={service}
                ></Service>)
            }
           </div>
        </div>

    );
};

export default Appointmentservice;