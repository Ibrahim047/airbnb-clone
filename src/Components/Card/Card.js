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

