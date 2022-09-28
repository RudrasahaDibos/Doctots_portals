import React from 'react';
import SmallCart from './SmallCart';
import clock from '../../../assets/icons/clock.svg'
import  marker  from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'


const SmallCart2 = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
             <SmallCart cardTilte="Openings Hours"   bg-c img={clock}></SmallCart>
             <SmallCart cardTilte=" Visit our Location"   img={marker} ></SmallCart>
             <SmallCart cardTilte=" Contact Us Now"   img={phone} ></SmallCart>
        </div>
    );
};

export default SmallCart2;