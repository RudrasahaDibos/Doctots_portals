import React from 'react';
import Footer from '../Shared/Footer/Footer';
import AppointmentBanner from './AppointmentBanner';
import { format } from 'date-fns';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Appointmentservice from './Appointmentservice';

const Appointment = () => {
    const [date ,setdate]=useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setdate={setdate} ></AppointmentBanner>
            <Appointmentservice></Appointmentservice>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;