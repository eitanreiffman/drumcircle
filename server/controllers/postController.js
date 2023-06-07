const getPosts = (req, res) => {
    res.send('Look at all of these awesome posts')
};

const createPost = (req, res) => {
    // Logic to create a new post in the database and send the response
}

module.exports = {
    getPosts,
    createPost
}