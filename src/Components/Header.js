
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
      <img src="/airbnb_logo.png" alt="Airbnb Logo" />
      <h2>airbnb</h2>
      </div>
      <div className="header-center">
        
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