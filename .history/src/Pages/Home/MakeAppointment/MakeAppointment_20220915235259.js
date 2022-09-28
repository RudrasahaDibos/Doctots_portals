import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <div>
            <div  style={{
                background:`url(${appointment})`
            }} className="hero min-h-screen px-12 ">
  <div className="hero-content flex-col lg:flex-row">
    <img  src={doctor} className="max-w-sm rounded-lg wi" />
    <div>
      <h3 className='text-primary'>Appointment||</h3>
      <h3 className="text-2xl font-bold" >Make an Appointment Today</h3>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default MakeAppointment;