import React from 'react';
import Banner from './Banner';
import SmallCart2 from './Card/SmallCart2';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
              <Banner></Banner>
              <SmallCart2></SmallCart2>
              <Services></Services>
              <MakeAppointment></MakeAppointment>
              <Testimonial></Testimonial>
        </div>
    );
};

export default Home;