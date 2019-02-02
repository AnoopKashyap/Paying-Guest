const mongoose = require('mongoose');

const { reviewSchema, Review } = require('./review.js');
//const { Review } = require('./review.js');

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    phone: {
        type: Number,
        required: true
    },
    room_no: {
        type: Number,
        required: true
    },
    works_for: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    permanent_address: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    rent_due:{
        type: Boolean,
        required: true
    },
    remainining_amount: {
        type: Number,
        required: true
    },
    presence_status: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    review: {
        type: reviewSchema
    },
    vacant_rooms: {
        type: Number,
        required: true
    },
    maintainance_fee: {
        type: Number,
        required: true
    },
    refund_status: {
        type: Boolean,
        required: true
    },
});

const Member = mongoose.model('Member', memberSchema);

async function create_member()
{
    const member = new Member({
        name: "Anoop",
email: "anup@gmail.com",
phone: 12345,
room_no: 123,
works_for: "Terralogic",
permanent_address: "KG Nagar 1st main road, Bangalore-19",
rent_due: true,
remainining_amount: 1000,
presence_status: "Present",
review: new Review({
    food_quality: 9,
    water_quality: 9,
    hygiene: 8,
    room_cleanliness: 6,
    pg_cleanliness: 7,
    comments: "can be better"
}),
vacant_rooms: 12,
maintainance_fee: 1200,
refund_status: true
    });

    const result = await member.save();
    console.log("im here",result);
}

//create_member();

