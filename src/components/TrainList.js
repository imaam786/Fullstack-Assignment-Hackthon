import React from 'react';
import TrainItem from './TrainItem';

const TrainList = ({ trains }) => {
  return (
    <div>
      {trains.map(train => (
        <TrainItem key={train.id} train={train} />
      ))}
    </div>
  );
};

export default TrainList;
