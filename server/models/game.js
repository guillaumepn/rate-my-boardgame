const mongoose = require('mongoose');
const db = require('../lib/db');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title: String,
    year: {type: Number, min: 1800},
    description: String
});

module.exports = db.model('game', gameSchema);

