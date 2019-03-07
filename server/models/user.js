const mongoose = require('mongoose');
const db = require('../lib/db');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: { type: String, required: true },
    firstname: String,
    lastname: String,
    password: { type: String, required: true, minlength: 4},
    email: String,
    role: [String],
    owned_games: [{ type: Schema.Types.ObjectId, ref: 'Game' }],
    wanted_games: [{ type: Schema.Types.ObjectId, ref: 'Game' }],
    created_at: {type : Date, default: Date.now},
});

module.exports = db.model("User", userSchema);

