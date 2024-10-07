
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header relative">
      <div className="header-left">
      <img src="/airbnb_logo.png" alt="Airbnb Logo" />
      <h2>airbnb</h2>
      </div>
      <div className="header-center">
        <div className='headermiddle flex items-center gap-5'>
          <h2>Anywhere</h2>
          <h2>Anyweek</h2>
          <h2>Add guests</h2>
          <button className='px-3 py-2 bg-rose-500 rounded-full text-white'><i class="ri-search-line"></i></button>
        </div>
      </div>

      <div className="header-right">
        <a id="ahover" href="#">Airbnb your Home</a>
        <a id="ahover" href=""><i class="ri-global-line"></i></a>
       
        <div className="signupmenu">
        <a href=""><i class="ri-menu-line"></i></a>
        <a href=""><i class="ri-user-line"></i></a>
        
        </div>

      </div>
    </header>
  );
}

export default Header;