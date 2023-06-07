// Importing our environment variables
require('dotenv').config();
// Retrieving Express
const express = require('express');
// Import database connect function
const connectDB = require('./database')
// Defining our Express App
const app = express();
// Defining our Port
const port = 3000;
// Importing the routes
const apiRoutes = require('./routes/apiRoutes');


// Connect to MongoDB
connectDB();

// Telling our app which port to listen to
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('This is Drumcircle');
});


// Using the API routes
app.use('/api', apiRoutes)