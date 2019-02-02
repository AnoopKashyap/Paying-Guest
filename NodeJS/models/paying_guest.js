const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
    rooms: {
        type: Number,
        required: true
    },
    sharing: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    food_type: {
        type: String
    },
    landmark: {
        type: String
    },
    ratings: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    vacancies: {
        type: Number,
        required: true
    }
});

const Guest = mongoose.model('Guest',guestSchema);