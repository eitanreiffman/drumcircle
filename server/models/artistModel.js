const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    artistType: {
        type: String,
        required: true
    },
    preferredGenres: {
        type: [String],
        required: true
    },
    instruments: {
        type: [String],
        required: false
    },
    bio: {
        type: String,
        required: false
    },
    portfolioLinks: {
        type: [String],
        required: false
    }
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;