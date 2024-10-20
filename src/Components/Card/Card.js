import React from 'react'
import './Card.css'
import ImageSlider from '../ImageSlider/ImageSlider'


const Card = () => {
  return (
    <div className='cards'>
      <div className='cardimage'>
        <ImageSlider/>
      </div>
        <div className='card-info'>
            <h2>City Title</h2>
            <h4>1878 Km's away</h4>
            <div className='guestbar flex gap-2'>
            <i class="ri-group-line"></i>
              <i class="ri-hotel-bed-line"></i>
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

