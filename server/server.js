// Importing our environment variables
require('dotenv').config();
// Importing Body Parser
const bodyParser = require('body-parser');
// Importing the routes
const routes = require('./routes/routes');
// Importing Authenticate Token Modules
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

// Connect to MongoDB
connectDB();

app.use(authenticateToken)

// Using the routes
app.use('/', routes)



// Defining our Port
const port = 3000;

// Telling our app which port to listen to
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

