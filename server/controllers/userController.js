const getSignUp = (req, res) => {
    res.send('Page to sign up users')
}

const createUser = (req, res) => {
    // Logic to create a new user in the database and send the response
}

module.exports = {
    getSignUp,
    createUser
}