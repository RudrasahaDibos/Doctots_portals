import React from 'react';
import Footer from '../Shared/Footer/Footer';
import AppointmentBanner from './AppointmentBanner';
import { format } from 'date-fns';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Appointment = () => {
    const [date ,setdate]=useState(new Date());
    return (
        <div>
            <AppointmentBanner  ></AppointmentBanner>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;