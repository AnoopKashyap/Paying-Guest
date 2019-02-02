const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    food_quality: {
        type: Number,
        required: true
    },
    water_quality: {
        type: Number,
        required: true
    },
    hygiene: {
        type: Number,
        required: true
    },
    room_cleanliness: {
        type: Number,
        required: true
    },
    pg_cleanliness: {
        type: Number,
        required: true
    },
    comments: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 500
    }
});

const Review = mongoose.model('Review', reviewSchema);

exports.reviewSchema = reviewSchema;
exports.Review = Review;