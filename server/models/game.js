const mongoose = require('mongoose');
const db = require('../lib/db');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title: {type: String, minlength: 1, maxlength: 100},
    year: {type: Number, min: 1800, message: 'Doit être une valeur numérique supérieure à 1800'},
    description: {type: String, minlength: 5, maxlength: 1000},
    creator: User, //TODO
    illustrator: String, //TODO
    editor: String, //TODO
    publisher: String, //TODO
    minPlayers: {type: Number, min: 1},
    maxPlayers: {type: Number, min: 1, validate: () => this.maxPlayers > this.minPlayers },
    ageRange: String,
    theme: [String], //TODO
    estimatedDuration: {type: Number, min: 0, max: 2000},
    mechanics: [String], //TODO
    ratings: [Rating], //TODO
    averageScore: {type: Number, min: 0, max: 10},
    website: {type: String, minlength: 5, maxlength: 300},
    image: {type: String, minlength: 5, maxlength: 300},
});

module.exports = db.model('game', gameSchema);

