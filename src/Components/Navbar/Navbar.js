import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
   
      <navbar className="navbar relative">
      <div className="navbar-left">
      <img src="/airbnb_logo.png" alt="Airbnb Logo" />
      <h2>airbnb</h2>
      </div>
      <div className="navbar-center flex flex-col gap-5">
        <div className='navbarmiddle flex items-center justify-center gap-5'>
          <h2>Stays</h2>
          <h2>Experiences</h2>
        </div>
        <div className='navbarsearch flex items-center '>
          <div className='navbarsearch-button font-normal'>
            <h4>Where</h4>
            <input className="bg-transparent font-light w-52 focus:outline-none focus:ring-0" type="text" placeholder='Search destination' />
          </div>
          <div className='navbarsearch-button w-32'>
            <h4>Check In</h4>
            <h6>Add dates</h6>
          </div>
          <div className='navbarsearch-button'>
            <h4>Check Out</h4>
            <h6>Add dates</h6>
          </div>
          <div className="flex rounded-full items-center px-2 gap-8 hover:bg-[#eee]">
            <div id="fullsearchbutton" className='navbarsearch-button '>
              <h4>Who</h4>
              <h6>Add Guests</h6>
              </div >
              <i class="ri-search-line"></i>
              </div>

            </div>
          </div>

      <div className="navbar-right">
        <a id="ahover" href="#">Airbnb your Home</a>
        <a id="ahover" href=""><i class="ri-global-line"></i></a>
       
        <div className="signupmenu">
        <a href=""><i class="ri-menu-line"></i></a>
        <a href=""><i class="ri-user-line"></i></a>
        
        </div>

      </div>
    </navbar>
  )
}

export default Navbar
