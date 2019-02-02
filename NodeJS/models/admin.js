const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    rooms_vacant:{
        type:Number,
        required:true
    },
    members:{
        type:Number,
        required:true
    },

});