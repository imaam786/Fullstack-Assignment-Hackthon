# Output
<img width="1280" alt="Screenshot 2023-06-04 163252" src="https://github.com/imaam786/Fullstack-Assignment-Hackthon/assets/58385239/e8ef76a9-3ca6-4102-975c-d23ebf1338ad">

## Steps
To run the train search web application, follow these steps:

1. Make sure you have Node.js installed on your machine. You can download it from the official Node.js website: https://nodejs.org

2. Open a terminal or command prompt and navigate to the root directory of your train search project.

3. Install the required dependencies by running the following command:
```
npm install
```

4. Start the backend server. In the terminal, run the following command:
```
node server.js
```

5. Open a new terminal or command prompt and navigate to the root directory of your train search project.

6. Start the frontend development server. In the terminal, run the following command:
```
npm start
```

7. The web application should now be running. Open your web browser and access the application at `http://localhost:3000`.

8. You can now use the train search web application to select source and destination stations, search for available trains, and view the list of trains. You can also sort the list of trains based on price and timings.

Remember to ensure that your MongoDB database is running and accessible for the train data to be fetched and populated in the application.

## Steps for MongoDB

To run MongoDB database, follow these steps:

1. Download MongoDB Community Server from the official MongoDB website: https://www.mongodb.com/try/download/community

2. Install MongoDB on your machine by following the installation instructions specific to your operating system.

3. Once MongoDB is installed, open a terminal or command prompt.

4. Create a directory where MongoDB will store its data. For example, you can create a directory called "data" in your home directory:
```
mkdir ~/data
```

5. Start the MongoDB server by running the following command. Replace `<path-to-mongodb>` with the path where MongoDB is installed on your machine. For example, on macOS, the default installation path is `/usr/local/bin`:
```
<path-to-mongodb>/mongod --dbpath ~/data
```

6. MongoDB will start running, and you will see log messages indicating the server status. By default, MongoDB runs on port 27017.

7. Keep the terminal or command prompt running with the MongoDB server process.

8. You can now connect to the MongoDB database using a MongoDB client or your application.
```
(mongodb://localhost:27017/train-search-db)
```

Note: If you want to use MongoDB Atlas, a cloud-based MongoDB service, you can sign up for an account at https://www.mongodb.com/cloud/atlas. MongoDB Atlas provides an easy way to set up and manage MongoDB databases without requiring manual installation and configuration on your machine.

Make sure to update your application's configuration or connection code to connect to the running MongoDB server.
