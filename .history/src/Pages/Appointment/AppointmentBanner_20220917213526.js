import React from 'react';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = () => {
    const [date ,setdate]=useState(new Date())
    return (
        <div className="hero min-h-screen   ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
          <DayPicker 
          mode = 'single'
          
          
          />;
          </div>
        </div>
      </div>
    );
};

export default AppointmentBanner;