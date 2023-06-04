const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const Train = require('./models/Train');
const cors = require('cors');

app.use(cors());

mongoose.connect('mongodb://localhost:27017/train-search-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.log('MongoDB connection error:', error));

app.use(express.json());

// Define routes here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.get('/trains', async (req, res) => {
//     const { source, destination } = req.query;
    
//     try {
//       const trains = await Train.find({
//         'stops.station': { $all: [source, destination] }
//       });
//       res.json(trains);
//     } catch (error) {
//       console.error('Error retrieving trains:', error);
//       res.status(500).json({ error: 'An error occurred while retrieving trains' });
//     }
//   });

// app.get('/trains', async (req, res) => {
//     const { source, destination } = req.query;
  
//     try {
//       const trains = await Train.find({
//         'stops.station': { $all: [source, destination] }
//       });
  
//       const calculateTicketPrice = (distance) => {
//         return distance * 1.25;
//       };
  
//       const searchResults = trains.map(train => {
//         const stops = train.stops;
//         const sourceIndex = stops.findIndex(stop => stop.station === source);
//         const destinationIndex = stops.findIndex(stop => stop.station === destination);
  
//         const departureTime = stops[sourceIndex].departureTime;
//         const arrivalTime = stops[destinationIndex].departureTime;
//         const distance = stops[destinationIndex].distance - stops[sourceIndex].distance;
//         const price = calculateTicketPrice(distance);
  
//         return {
//           trainId: train._id,
//           name: train.name,
//           departureTime,
//           arrivalTime,
//           distance,
//           price
//         };
//       });
  
//       res.json(searchResults);
//     } catch (error) {
//       console.error('Error retrieving trains:', error);
//       res.status(500).json({ error: 'An error occurred while retrieving trains' });
//     }
//   });

app.get('/trains', async (req, res) => {
    const { source, destination } = req.query;
    const { sort } = req.query;
  
    try {
      const trains = await Train.find({
        'stops.station': { $all: [source, destination] }
      });
  
      const calculateTicketPrice = (distance) => {
        return distance * 1.25;
      };
  
      const searchResults = trains.map(train => {
        const stops = train.stops;
        const sourceIndex = stops.findIndex(stop => stop.station === source);
        const destinationIndex = stops.findIndex(stop => stop.station === destination);
  
        const departureTime = stops[sourceIndex].departureTime;
        const arrivalTime = stops[destinationIndex].departureTime;
        const distance = stops[destinationIndex].distance - stops[sourceIndex].distance;
        const price = calculateTicketPrice(distance);
  
        return {
          trainId: train._id,
          name: train.name,
          departureTime,
          arrivalTime,
          distance,
          price
        };
      });
  
      // Sort the search results based on the requested sort option
      if (sort === 'price') {
        searchResults.sort((a, b) => a.price - b.price);
      } else if (sort === 'timings') {
        searchResults.sort((a, b) => {
          const aDeparture = new Date(`1970-01-01T${a.departureTime}`);
          const bDeparture = new Date(`1970-01-01T${b.departureTime}`);
          return aDeparture - bDeparture;
        });
      }
  
      res.json(searchResults);
    } catch (error) {
      console.error('Error retrieving trains:', error);
      res.status(500).json({ error: 'An error occurred while retrieving trains' });
    }
  });
  
  
  
