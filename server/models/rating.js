const mongoose = require('mongoose');
const db = require('../lib/db');

const Schema = mongoose.Schema;
const ratingSchema = new Schema({
    score: {type: Number, min: 0, max: 10},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    game: {type: Schema.Types.ObjectId, ref: 'Game'},
    date: Date,
    created_at: {type : Date, default: Date.now},
});

module.exports = db.model("Rating", ratingSchema);
