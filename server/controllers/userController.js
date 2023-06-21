const bcrypt = require('bcryptjs')
const User = require('../models/userModel')


const createUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = new User({
            username: username,
            email: email,
            password: hashedPassword
        });

        await user.save();

        res.status(201).json({ message: 'User created successfully!' });

    } catch (error) {
        console.error('Failed to create user:', error)
        res.status(500).json('Failed to create user')
    }
}

const logInUser = async (req, res) => {
    // backend function to log in user
}

module.exports = {
    createUser,
    logInUser
}