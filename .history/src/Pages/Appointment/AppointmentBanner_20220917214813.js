import { format } from 'date-fns';
import React from 'react';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png';
const AppointmentBanner = () => {
    const [date ,setdate]=useState(new Date());
    return (
        <div className="hero min-h-screen   ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
          <DayPicker 
          mode='single'
          selected={date}
          onSelect={setdate}
          />
          <p>You have Selected :{format(date, 'pp')}</p>
          </div>
        </div>
      </div>
    );
};

export default AppointmentBanner;