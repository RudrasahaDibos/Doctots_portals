import React from 'react';


const SmallCart = (img ,cardTilte) => {
    return (
        <div>
     <div className="card lg:card-side bg-base-100 shadow-xl bg-accent">
      <figure><img src={img} alt="Album"/></figure>
      <div className="card-body">
      <h2 className="card-title">{Ca}</h2>
      <p>Click the button to listen on Spotiwhy app.</p>
  </div>
</div>
        </div>
    );
};

export default SmallCart;