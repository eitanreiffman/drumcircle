// Importing our environment variables
require('dotenv').config();
// Retrieving Express
const express = require('express');
// Import database connect function
const connectDB = require('./database')
// Enabling cross-origin requests
const cors = require('cors')
// Defining our Express App
const app = express();
// Enabling CORS
app.use(cors());

// Defining our Port
const port = 3000;
// Importing the routes
const routes = require('./routes/routes');


// Connect to MongoDB
connectDB();

// Telling our app which port to listen to
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// Using the routes
app.use('/', routes)