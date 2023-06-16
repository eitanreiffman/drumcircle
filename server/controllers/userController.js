const User = require('../models/userModel')

const getSignUp = (req, res) => {
    res.send('Page to sign up users')
}

const createUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = new User({
            username: username,
            email: email,
            password: password
        })

        await user.save();

        res.status(201).json({ message: 'User created successfully!' });

    } catch (error) {
        console.error('Failed to create user:', error)
        res.status(500).json('Failed to create user')
    }
}    

module.exports = {
    getSignUp,
    createUser
}