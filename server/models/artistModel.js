const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    artistType: {
        type: [String],
        required: false
    },
    preferredGenres: {
        type: [String],
        required: false
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
        type: [{
            link: String,
            website: String
        }],
        required: false
    }
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;