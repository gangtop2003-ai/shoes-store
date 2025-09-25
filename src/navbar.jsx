
import React from "react";
import {NavLink } from "react-router-dom";

// صفحات نمونه


const Navbar = ({sabad}) => {
  return (
    <div className="navbar" >
      
         <NavLink to="/" className='nav-link' end>
        صفحه اصلی
      </NavLink>
      <NavLink to="/bags" className='nav-link'>
        کفش مجلسی
      </NavLink>
      <NavLink to="/shoes" className='nav-link'>
        کیف مجلسی
      </NavLink>
      
     <NavLink to="/sabad" className='nav-link'>سبد خرید:<span style={{color:'yellow'}}>{sabad.length}</span></NavLink>

    <NavLink to="/call" className='nav-link'>
        تماس با ما
      </NavLink>
     
    </div>
  );
};


export default Navbar;
