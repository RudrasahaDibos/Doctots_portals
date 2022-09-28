import React from 'react';
import SmallCart from './SmallCart';
import clock from '../../../assets/icons/clock.svg'
import  marker  from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'


const SmallCart2 = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
             <SmallCart carddis='Open 24 Hours' cardTilte="Openings Hours"   bgcolor="bg-gradient-to-r from-secondary to-accent" img={clock}></SmallCart>
             <SmallCart carddis='Dhaka,Bangladesh'  cardTilte=" Visit our Location" bgcolor="bg-accent"  img={marker} ></SmallCart>
             <SmallCart carddis='01705155583' cardTilte=" Contact Us Now"  bgcolor="bg-gradient-to-r from-accent to-secondary"   img={phone} ></SmallCart>
        </div>
    );
};

export default SmallCart2;