const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const User = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    passwordConfirm: {
        type: String,
    },
    active: {
        type: Boolean,
        default: true,
        select: false
    }
})


User.pre("save", async function (next) {

    if (!this.isModified("password")) return next();
  
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
  
    next();
});
  

module.exports = mongoose.model('User', User)