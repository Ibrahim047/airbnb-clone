import React from 'react';
import Slider from 'react-slick';
import './ExploreSection.css';
// Import the slick-carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ExploreSection() {
  const exploreicons = [
    {id:1, title:"Icons", icon:<i class="ri-coupon-line"></i>},
    {id:2, title:"Rooms", icon:<i class="ri-government-line"></i>},
    {id:3, title:"Homes", icon:<i class="ri-ancient-gate-line"></i>},
    {id:4, title:"Villas", icon:<i class="ri-ancient-gate-line"></i>},
    {id:5, title:"Cabins", icon:<i class="ri-ancient-gate-line"></i>},
    {id:6, title:"Portions", icon:<i class="ri-ancient-gate-line"></i>},
    {id:7, title:"Hot", icon:<i class="ri-ancient-gate-line"></i>},
    {id:8, title:"Trending", icon:<i class="ri-ancient-gate-line"></i>},
    {id:9, title:"In demand", icon:<i class="ri-ancient-gate-line"></i>},
    {id:10, title:"Vacations", icon:<i class="ri-ancient-gate-line"></i>},
    {id:11, title:"Places to stay", icon:<i class="ri-ancient-gate-line"></i>},
    {id:12, title:"Views", icon:<i class="ri-ancient-gate-line"></i>},
    {id:13, title:"Oasis", icon:<i class="ri-coupon-line"></i>},
    {id:14, title:"Sanctuary", icon:<i class="ri-government-line"></i>},
    {id:15, title:"Retreat", icon:<i class="ri-ancient-gate-line"></i>},
    {id:16, title:"Haven", icon:<i class="ri-ancient-gate-line"></i>},
    {id:17, title:"Hideaway", icon:<i class="ri-ancient-gate-line"></i>},
    {id:18, title:"Nook", icon:<i class="ri-ancient-gate-line"></i>},
    {id:19, title:"Escape", icon:<i class="ri-ancient-gate-line"></i>},
    {id:20, title:"Hotspot", icon:<i class="ri-ancient-gate-line"></i>},
    {id:21, title:"Gem", icon:<i class="ri-ancient-gate-line"></i>},
    {id:22, title:"Paradise", icon:<i class="ri-ancient-gate-line"></i>},
    {id:23, title:"Nest", icon:<i class="ri-ancient-gate-line"></i>},
    {id:24, title:"Panorama", icon:<i class="ri-ancient-gate-line"></i>},
  ]

  // Custom arrow components
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button className='leftarrow' onClick={onClick}>
        <i class="ri-arrow-left-s-line"></i>
      </button>
    );
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button className='rightarrow' onClick={onClick}>
        <i class="ri-arrow-right-s-line"></i>
      </button>
    );
  };

  // Slider settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 14,
    slidesToScroll: 5,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      }
    ]
  };

  return (
    <section className="explorewrapper">
      <Slider {...settings}>
        {exploreicons.map((item) => (
          <div key={item.id} className='exploreicon'>
            <div className='iconcontent'>
              {item.icon}
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default ExploreSection;