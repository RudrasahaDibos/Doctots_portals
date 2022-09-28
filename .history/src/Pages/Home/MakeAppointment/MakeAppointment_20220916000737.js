import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <div className='px-12 mt-24'>
            <div  style={{
                background:`url(${appointment})`
            }} className="hero justify-center items-center px-12 ">
  <div className="hero-content flex-col lg:flex-row">
    <img  src={doctor} className="max-w-sm mt-[-100px] max-h-fulll " />
    <div>
      <h3 className='text-primary text-xl'>Appointment||</h3>
      <h3 className="text-2xl font-bold text-white" >Make an Appointment Today</h3>
      <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default MakeAppointment;