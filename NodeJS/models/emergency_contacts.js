const mongoose = require('mongoose');

const emergencySchema = mongoose.Schema({
    owner_name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    owner_phone: {
        type: Number,
        required: true,
    },
    doctor_name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    doctor_phone: {
        type: Number,
        required: true,
    },
    police_station: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    police_phone: {
        type: Number,
        required: true,
    }
});

const Emergency = mongoose.model('Emergency',emergencySchema);