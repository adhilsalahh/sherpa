import React from 'react';
import EventsCard from './EventsCard';

function Events() {
  return (
    <div className='mt-5 px-5 flex flex-wrap gap-4'>
      {[1, 1, 1].map((item, index) => (
        <EventsCard key={index} />
      ))}
    </div>
  );
}

export default Events;