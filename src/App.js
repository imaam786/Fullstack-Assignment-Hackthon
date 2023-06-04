import React from 'react';
import SearchForm from './components/SearchForm';
import TrainList from './components/TrainList';
import axios from 'axios';


const App = () => {
  // Replace this with actual station data
  const stations = [
    { id: 1, name: 'Chennai' },
    { id: 2, name: 'Vellore' },
    { id: 3, name: 'Bangalore' },
    { id: 4, name: 'Mysuru' },
    { id: 5, name: 'Mangalore' },
  ];

  // Replace this with actual train data
  const trains = [
    { id: 1, name: 'Train A', departureTime: '09:00', arrivalTime: '21:45', distance: 420, price: 525 },
    // { id: 2, name: 'Train B', departureTime: '09:00', arrivalTime: '17:30', distance: 430, price: 537.5 },
  ];

  // const handleSearch = (source, destination) => {
  //   // Handle search logic here
  //   console.log('Source:', source);
  //   console.log('Destination:', destination);
  // };

  const handleSearch = (source, destination) => {
    axios
      .get(`/trains?source=${source}&destination=${destination}`)
      .then(response => {
        const searchResults = response.data;
        console.log('Search results:', searchResults);
        // Update the state or do something with the search results
      })
      .catch(error => {
        console.error('Error searching trains:', error);
      });
  };

  return (
    <div>
      <h1>Train Search Web Application</h1>
      <SearchForm stations={stations} handleSearch={handleSearch} />
      <TrainList trains={trains} />
    </div>
  );
};




export default App;