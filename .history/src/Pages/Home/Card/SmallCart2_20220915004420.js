import React from 'react';
import SmallCart from './SmallCart';
import clock from '../../../assets/icons/clock.svg'
import  marker  from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'


const SmallCart2 = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gr'>
             <SmallCart img={clock}></SmallCart>
             <SmallCart img={marker} ></SmallCart>
             <SmallCart img={phone} ></SmallCart>
        </div>
    );
};

export default SmallCart2;