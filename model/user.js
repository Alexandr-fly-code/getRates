const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema ({

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

let User = mongoose.model('User', user);
module.exports = User;