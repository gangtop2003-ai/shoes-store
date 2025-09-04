
import React from "react";
import {NavLink } from "react-router-dom";

// صفحات نمونه


const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className='nav-link' end>
        صفحه اصلی
      </NavLink>
      <NavLink to="/bags" className='nav-link'>
        کیف مجلسی
      </NavLink>
      <NavLink to="/shoes" className='nav-link'>
        کفش مجلسی
      </NavLink>
    </nav>
  );
};


export default Navbar;
