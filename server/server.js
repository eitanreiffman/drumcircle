// Importing our environment variables
require('dotenv').config();
// Importing Body Parser
const bodyParser = require('body-parser');
// Importing the routes
const routes = require('./routes/routes');
// Importing Authenticate Token Module
const authenticateToken = require('./auth')
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
// Using Body Parser for app
app.use(bodyParser.json());
// Using Token Authentication
app.use(authenticateToken)


// Defining our Port
const port = 3000;


// Connect to MongoDB
connectDB();

// Telling our app which port to listen to
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// Using the routes
app.use('/', routes)