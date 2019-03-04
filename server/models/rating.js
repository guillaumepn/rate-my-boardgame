const mongoose = require('mongoose');
const db = require('../libs/db');

const Schema = mongoose.Schema;
const ratingSchema = new Schema({
    score: Number,
    user: UserSchema,
    game: GameSchema,
    date: Date,
    created_at: { type : Date, default: Date.now },
});

module.exports = db.model("rating", ratingSchema);