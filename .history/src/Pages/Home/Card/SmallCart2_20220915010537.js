import React from 'react';
import SmallCart from './SmallCart';
import clock from '../../../assets/icons/clock.svg'
import  marker  from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'


const SmallCart2 = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap- px-12'>
             <SmallCart cardTilte="Openings Hours"   bgcolor="bg-gradient-to-r from-secondary to-accent" img={clock}></SmallCart>
             <SmallCart cardTilte=" Visit our Location" bgcolor="bg-accent"  img={marker} ></SmallCart>
             <SmallCart cardTilte=" Contact Us Now"  bgcolor="bg-gradient-to-r from-secondary to-accent"   img={phone} ></SmallCart>
        </div>
    );
};

export default SmallCart2;