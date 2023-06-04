import React from 'react';

const TrainItem = ({ train }) => {
  return (
    <div>
      <h3>{train.name}</h3>
      <p>Departure: {train.departureTime}</p>
      <p>Arrival: {train.arrivalTime}</p>
      <p>Distance: {train.distance} Kms</p>
      <p>Price: Rs {train.price}</p>
    </div>
  );
};

export default TrainItem;
