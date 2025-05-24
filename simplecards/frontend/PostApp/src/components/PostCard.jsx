import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs'; // For formatting date

const PostCard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/postapp/post/')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
    //   console.log(data);
  }, []);
  console.log(events);
  
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Upcoming Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <div key={event.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-blue-700">{event.title}</h2>
              <p className="text-gray-600 text-sm mb-2">Venue: {event.venue}</p>
              <p className="text-gray-700 mb-3">{event.description}</p>
              <p className="text-sm text-gray-500">Date: {dayjs(event.date).format('MMMM D, YYYY h:mm A')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
