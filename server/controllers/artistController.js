const Artist = require('../models/artistModel')

const createArtist = async (req, res) => {
    try {
        const {artistData} = req.body

        const artist = new Artist({
            userId: req.user.id,
            ...artistData
        });

        await artist.save();

        return res.status(200).json({ message: 'Artist profile created successfully', artist })
    } catch (error) {
        console.error('Error creating artist profile:', error)
        res.status(500).json({ message: 'An error occurred while creatingf the artist profile' })
    }
}

module.exports = {
    createArtist
};