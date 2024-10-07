
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src="/airbnb_logo.png" alt="Airbnb Logo" />
      <div className="header-center">

      </div>
      <div className="header-right">
        <button>Airbnb your Home</button>
        <button><i class="ri-global-line"></i>
        </button>
        <div className="signupmenu">
        <button><i class="ri-menu-line"></i></button>
        <button><i class="ri-user-line"></i></button>
      </div>

        </div>
    </header>
  );
}

export default Header;