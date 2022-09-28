import React from 'react';
import SmallCart from './SmallCart';
import clock from '../../../assets/icons/clock.svg'
import clock from '../../../assets/icons/marker.svg'
import clock from '../../../assets/icons/phone.svg'


const SmallCart2 = () => {
    return (
        <div>
             <SmallCart img={clock}></SmallCart>
             <SmallCart ></SmallCart>
             <SmallCart></SmallCart>
        </div>
    );
};

export default SmallCart2;