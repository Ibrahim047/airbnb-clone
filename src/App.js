import React from 'react'
import Header from './Components/Header/Header'
import ExploreSection from './Components/ExploreSection/ExploreSection'
import Card from './Components/Card/Card'
import Navbar from './Components/Navbar/Navbar'
import ImageSlider from './Components/ImageSlider/ImageSlider'
const App = () => {
  return (
    <div>
      <Navbar />      
      <ExploreSection />
      <div className="flex gap-0 flex-wrap px-16">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      
     


      </div>
    </div>
  )
}

export default App
