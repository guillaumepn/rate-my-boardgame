const mongoose = require('mongoose');
const db = require('../libs/db');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    userName: String,
    firstName: String,
    lastName: String,
    password: { type: String, minlength: 8},
    email: String,
    role: [String],
    owned_games: [GameSchema],
    wanted_games: [GameSchema],
    created_at: { type : Date, default: Date.now },
});

module.exports = db.model("user", userSchema);