const mongoose = require('mongoose');
const Train = require('./models/Train');

mongoose.connect('mongodb://localhost:27017/train-search-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');

  const generateRandomStops = () => {
    const stops = ['Chennai', 'Vellore', 'Bangalore', 'Mysuru', 'Mangalore'];
    const shuffledStops = stops.sort(() => 0.5 - Math.random());
    const numStops = Math.floor(Math.random() * (shuffledStops.length - 2)) + 2;
    return shuffledStops.slice(0, numStops);
  };

  const generateRandomTime = () => {
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  const generateRandomDistance = () => {
    return Math.floor(Math.random() * 500) + 100;
  };

  const generateRandomPrice = (distance) => {
    return distance * 1.25;
  };

  const generateTrains = async () => {
    try {
      for (let i = 1; i <= 1000; i++) {
        const stops = generateRandomStops();
        const train = new Train({
          name: `Train ${i}`,
          stops: stops.map((stop, index) => ({
            station: stop,
            distance: index > 0 ? generateRandomDistance() : 0,
            departureTime: index > 0 ? generateRandomTime() : ''
          }))
        });
        await train.save();
      }
      console.log('Train data generation completed');
      process.exit();
    } catch (error) {
      console.error('Error generating train data:', error);
      process.exit(1);
    }
  };

  generateTrains();
})
.catch(error => {
  console.log('MongoDB connection error:', error);
  process.exit(1);
});
