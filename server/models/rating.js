const mongoose = require('mongoose');
const db = require('../lib/db');

const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    score: {type: Number, min: 0, max: 10},
    user: {type: String, ref: 'User.username'},
    game: {type: Schema.Types.ObjectId, ref: 'Game'},
    created_at: {type : Date, default: Date.now},
});

module.exports = db.model("Rating", ratingSchema);
