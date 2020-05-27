const mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required.'
    },
    image: {
        type: String
    },
    summary: {
        type: String
    }
});


mongoose.model('Movie', movieSchema);