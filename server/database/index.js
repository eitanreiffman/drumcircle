// Defining Mongoose
const mongoose = require('mongoose')

// Storing env variable in source code variable
const connectionString = process.env.MONGODB_SECRET_KEY

// Connect to MongoDB
const connectDB = () => {
    mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB', error);
    });
}

module.exports = connectDB