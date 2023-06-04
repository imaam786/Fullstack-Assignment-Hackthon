import React from 'react';
import { FormControl, Select, MenuItem, Button } from '@mui/material';

const SearchForm = ({ stations, handleSearch }) => {
  const [source, setSource] = React.useState('');
  const [destination, setDestination] = React.useState('');

  const handleSourceChange = (event) => {
    setSource(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(source, destination);
  };

  return (
    <div>
      <FormControl>
        <Select value={source} onChange={handleSourceChange}>
          <MenuItem value="">Select Source Station</MenuItem>
          {stations.map(station => (
            <MenuItem key={station.id} value={station.id}>{station.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <Select value={destination} onChange={handleDestinationChange}>
          <MenuItem value="">Select Destination Station</MenuItem>
          {stations.map(station => (
            <MenuItem key={station.id} value={station.id}>{station.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSearchClick}>
        Search
      </Button>
    </div>
  );
};

export default SearchForm;
