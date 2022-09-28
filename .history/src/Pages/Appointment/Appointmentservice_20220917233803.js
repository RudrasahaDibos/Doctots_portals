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
            {
                services.map(service=><Service 
                key={service._id}
                service={service}
                >

                </Service>)
            }
        </div>

    );
};

export default Appointmentservice;