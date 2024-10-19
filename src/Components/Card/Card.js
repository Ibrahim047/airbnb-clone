import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className='cards'>
      <div className='cardimage'>
        <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NzY0ODgzNzUzNjQzNw%3D%3D/original/1077cfcd-29d5-42b7-adab-19e0b620e492.jpeg?im_w=1440&im_q=highq" alt="airbnb_logo" />
      </div>
        <div className='card-info'>
            <h2>Card Title</h2>
            <h4>Property type</h4>
            <div className='guestbar flex gap-2'>
              <h4>2 guests</h4>
              <h4>1 bedroom</h4>
              <h4>1 bed</h4>
              <h4>1 bath</h4>
            </div>
            <h4>Price per night</h4>
            <p>*****</p>
        </div>
    </div>
  )
}

export default Card

