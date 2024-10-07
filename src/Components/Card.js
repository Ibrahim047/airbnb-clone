import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className='cards'>
        <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NzY0ODgzNzUzNjQzNw%3D%3D/original/1077cfcd-29d5-42b7-adab-19e0b620e492.jpeg?im_w=1440&im_q=highq" alt="airbnb_logo" />
        <div className='card-info'>
            <h2>Card Title</h2>
            <p>Card Description</p>
        </div>
    </div>
  )
}

export default Card

