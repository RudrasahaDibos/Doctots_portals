import React from 'react';
import SmallCart from './SmallCart';
import clock from '../../../assets/icons/clock.svg'
import  marker  from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'


const SmallCart2 = () => {
    return (
        <div>
             <SmallCart img={clock}></SmallCart>
             <SmallCart img={marker} ></SmallCart>
             <SmallCart></SmallCart>
        </div>
    );
};

export default SmallCart2;