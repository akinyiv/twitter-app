const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        Required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profileImageUrl: {
        type: String,
    }
})

