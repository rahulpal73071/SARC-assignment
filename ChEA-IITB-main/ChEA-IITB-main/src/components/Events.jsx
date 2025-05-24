import React from "react";
import './Events.css';
import Footer from "./Footer";
const events = [
    {
      "name": "Time Capsule",
      "description": "A unique event where distinguished alumni interact with students, providing professional insights and helping current chemical engineering students explore their passions.",
      "url": "https://cheaiitb.in/image1.webp"
    },
    {
      "name": "Valfi",
      "description": "A farewell event for fourth-year students, celebrating memories, fostering interactions, engaging in games, and experiencing departmental sentiments.",
      "url": "https://cheaiitb.in/vlf.jpeg"
    },
    {
      "name": "Freshie Oreo",
      "description": "The first major interaction between the council and freshmen, filled with games and performances. An event 'Of the Freshers, By the Freshers, and For the Freshers.'",
      "url": "https://cheaiitb.in/image3.webp"
    },
    {
      "name": "Know Your Profs",
      "description": "A video series where professors share their college experiences and academic journeys, conducted both online and offline to provide insights into their endeavors.",
      "url": "https://cheaiitb.in/image4.webp"
    },
    {
      "name": "Traditional Day",
      "description": "An informal event at Jal Vihar, typically in September, allowing participants to meet their 'roll' family members and enjoy photoshoots in traditional attire.",
      "url": "https://cheaiitb.in/image5.webp"
    },
    {
      "name": "Core Talks",
      "description": "Annual interactive sessions with alumni from industry and higher studies, offering insightful stories and addressing individual student queries.",
      "url": "https://cheaiitb.in/image6.webp"
    },
    {
      "name": "Department Trips",
      "description": "Opportunities to relieve academic stress through bonding activities with batchmates and seniors, including one-day treks in autumn and two-day camping trips in spring.",
      "url": "https://cheaiitb.in/dp1'.jpg"
    },
    {
      "name": "Sport Events",
      "description": "Organized sports events promoting fitness, including outdoor activities like football and cricket tournaments, as well as indoor games like table tennis and badminton.",
      "url": "https://cheaiitb.in/fl.jpg"
    },
    {
      "name": "Panel Discussions",
      "description": "A series started in 2021 where alumni discuss the evolving role of chemical engineers, challenging students to think innovatively and apply their knowledge to the field.",
      "url": "https://cheaiitb.in/image9.webp"
    },
    {
      "name": "Alumni Reunion",
      "description": "A three-day event welcoming the silver jubilee batch of chemical engineering alumni, facilitating interactions with professors and students to share valuable insights.",
      "url": "https://cheaiitb.in/image10.webp"
    },
    {
      "name": "Convocation",
      "description": "A ceremony allowing graduates to reconnect and relive core memories, especially significant for those whose convocations were affected by the pandemic.",
      "url": "https://cheaiitb.in/image12.webp"
    },
    {
      "name": "Miscellaneous Events",
      "description": "Various events catering to student interests and current needs, including alumni sessions and online gaming nights.",
      "url": "https://cheaiitb.in/image11.webp"
    }
  ]
  


const Events = () =>{
    
      
    
    return (
        <>
        <div className="container">
      <h1 className="head1">OUR EVENTS</h1>
      
        {events.map((event) => (
            
            <div className="flex_main">

            <div className="content">
                
                <img src={event.url} alt={event.name} className="img" />
                <h2 className="name">{event.name}</h2>
                
                <p className="description">{event.description}</p>
                
            </div>
        </div>
        )
    )}
    <Footer/>
      
    </div>
        </>
        
    );
};
export default Events;