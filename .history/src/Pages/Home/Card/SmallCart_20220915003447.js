import React from 'react';
import img from '../../../assets/icons'

const SmallCart = () => {
    return (
        <div>
     <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
      <div className="card-body">
      <h2 className="card-title">New album is released!</h2>
      <p>Click the button to listen on Spotiwhy app.</p>
  </div>
</div>
        </div>
    );
};

export default SmallCart;