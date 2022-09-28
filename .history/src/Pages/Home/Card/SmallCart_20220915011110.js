import React from 'react';


const SmallCart = ({img ,cardTilte,bgcolor,carddis}) => {
    return (
        <div>
     <div className={`card lg:card-side bg-base-100  shadow-xl ${bgcolor} `}>
      <figure className='pl-5'>
        <img src={img} alt="Album"/>
        </figure>
      <div className="card-body">
      <h2 className="card-title">{cardTilte}</h2>
      <p>{carddis}</p>
  </div>
</div>
        </div>
    );
};

export default SmallCart;