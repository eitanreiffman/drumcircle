


const getPosts = (req, res) => {
    const variableString = 'Look at all of these awesome posts'
    res.json({ message: variableString })
};



const createPost = (req, res) => {
    // Logic to create a new post in the database and send the response
}

module.exports = {
    getPosts,
    createPost
}