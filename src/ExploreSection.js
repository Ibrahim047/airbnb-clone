import React from 'react';
import './ExploreSection.css';

const exploreData = [
  { id: 1, title: "Online Experiences", imageUrl: "/airbnb_online_experiences.jpg" },
  { id: 2, title: "Unique Stays", imageUrl: "/airbnb_unique_stays.jpg" },
  { id: 3, title: "Entire Homes", imageUrl: "/airbnb_entire_homes.jpg" },
  { id: 4, title: "Pets Allowed", imageUrl: "/airbnb_pets_allowed.jpg" }
];

function ExploreSection() {
  return (
    <section className="explore">
      <h2>Explore Airbnb</h2>
      <div className="cards-container">
        {exploreData.map(item => (
          <div key={item.id} className="card">
            <img src={item.imageUrl} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExploreSection;