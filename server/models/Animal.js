const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, "An animal must have a name no?"]
    },
    typeOf: {
        type: String,
        required: true,
        minlength: [3, "What type of animal is this?"]
    },
    color: {
        type: String,
        required: [true, "Color?"]
    },
    age: {
        type: Number,
        required: true,
        min: [1, "Are they not even born yet?"]
    },
    time: {
        type: Date,
        default: Date.now()
    }
}, {timestamps: true})

mongoose.model('Animal', AnimalSchema);