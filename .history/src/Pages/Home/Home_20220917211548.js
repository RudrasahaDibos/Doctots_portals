import React from 'react';
import Banner from './Banner';
import SmallCart2 from './Card/SmallCart2';
import Contractus from './contractus/Contractus';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import Testmonial2 from './Testimonial/Testmonial2';

const Home = () => {
    return (
        <div>
              <Banner></Banner>
              <SmallCart2></SmallCart2>
              <Services></Services>
              <MakeAppointment></MakeAppointment>
              <Testmonial2></Testmonial2>
              <Contractus></Contractus>
              
        </div>
    );
};

export default Home;