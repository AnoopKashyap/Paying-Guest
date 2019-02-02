const mongoose = require('mongoose');

const { memberSchema } = require('./member.js');

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    rooms_vacant: {
        type:Number,
        required:true
    },
    members:[memberSchema],
    bookings: {
        type: Number,
        required: true
    },
    rooms_added: {
        type: Number,
        required: true
    },
    rooms_removed: {
        type: Number,
        required: true
    },
    cancellations: {
        type: Number,
        required: true
    },
    rules: {
        type: String,
        required: true
    }
});

const Admin = mongoose.model('Admin',adminSchema);