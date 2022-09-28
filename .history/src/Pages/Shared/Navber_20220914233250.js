import React from 'react';

const Navber = () => {
   const navber = <>
        <li><Link >Home</Link></li>
        <li><Link > About</Link></li>
        <li><Link >Appointment</Link></li>
        <li><Link >Reviews</Link></li>
        <li><Link >Contact Us</Link></li>
        <li><Link >Login</Link></li>
   
   </>
          

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navber}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl ml-6">Doctor Portals</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0 mr-14">
      {navber}
    </ul>
  </div>

</div>
    );
};

export default Navber;