import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  // Array of your image URLs (replace with your actual URLs)
  const imageUrls = [
    'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1496328488450-9c5c5d555148?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1560185008-b033106af5c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1507149833265-60c372daea22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1546551613-09c2f83e1ede?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D',
  ];

  useEffect(() => {
    // Function to get 5 random images from the imageUrls array
    const getRandomImages = (num) => {
      const shuffled = [...imageUrls].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    };

    // Set the images to the state
    setImages(getRandomImages(5));
  }, []);

  // Handler for showing the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handler for showing the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div
      className="relative w-full h-[300px] overflow-hidden rounded-md object-center"
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
    >
      <img
        src={images[currentIndex]}
        alt="Slider Image"
        className="w-full h-full object-cover"
      />
      {/* Show buttons only when hovered */}
      {isHovered && (
        <>
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 text-black bg-white bg-opacity-50 text-xl rounded-full px-2 py-1"
            onClick={prevImage}
          >
            <i class="ri-arrow-left-s-line"></i>
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-xl text-black bg-white bg-opacity-50 rounded-full px-2 py-1"
            onClick={nextImage}
          >
            <i class="ri-arrow-right-s-line"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
