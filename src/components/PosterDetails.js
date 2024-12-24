import React from 'react';

const PosterDetails = ({ poster }) => {
  return (
    <div>
      <h3>{poster.title}</h3>
      {/* Add more details of the poster here */}
      <p>Poster ID: {poster.id}</p>
    </div>
  );
};

export default PosterDetails;  // Default export
