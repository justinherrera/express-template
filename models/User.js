const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false
    },
    active: {
        type: Boolean,
        default: true,
        select: false
    }
})


module.exports = mongoose.model('User', User)