const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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
    const { username, password } = req.body;

    try {
        // Find user based on provided username
        const user = await User.findOne({ username })

        // If the username doesn't exist
        if (!user) {
            return res.status(401).json({ message: 'Invalid username' });
        }

        // If it does, compare provided password with stored password
        const isMatch = await user.comparePassword(password);

        // If the password isn't a match
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // If the username and password are valid, create JWT
        const token = jwt.sign({ 
            userId: user._id, 
            username: user.username 
        }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1h' }
        )

        // Return token as a response
        res.json({ token });
    } catch (error) {
        console.error('Failed to log in:', error);
        res.status(500).json({ message: 'Failed to log in' });
    }
};

module.exports = {
    createUser,
    logInUser
}