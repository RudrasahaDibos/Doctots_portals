import React from 'react';


const SmallCart = ({img ,cardTilte,bgcolor}) => {
    return (
        <div>
     <div className=``>
      <figure><img src={img} alt="Album"/></figure>
      <div className="card-body">
      <h2 className="card-title">{cardTilte}</h2>
      <p>Click the button to listen on Spotiwhy app.</p>
  </div>
</div>
        </div>
    );
};

export default SmallCart;