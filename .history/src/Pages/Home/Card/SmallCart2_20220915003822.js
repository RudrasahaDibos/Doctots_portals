import React from 'react';
import SmallCart from './SmallCart';
import clock from '../../../assets/icons/clock.svg'

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