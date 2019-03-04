const mongoose = require('mongoose');
const db = require('../lib/db');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title: {type: String, minlength: 1, maxlength: 100},
    year: {type: Number, min: 1800, message: 'Doit être une valeur numérique supérieure à 1800'},
    description: {type: String, minlength: 5, maxlength: 1000},
    creator:  {type: Schema.Types.ObjectId, ref: 'User'},
    illustrator: String,
    editor: String,
    publisher: String,
    minPlayers: {type: Number, min: 1},
    maxPlayers: {type: Number, min: 1, validate: () => this.maxPlayers > this.minPlayers },
    ageRange: String,
    theme: [String],
    estimatedDuration: {type: Number, min: 0, max: 2000},
    mechanics: [String],
    ratings: [{ type: Schema.Types.ObjectId, ref: 'Rating' }],
    averageScore: {type: Number, min: 0, max: 10},
    website: {type: String, minlength: 5, maxlength: 300},
    image: {type: String, minlength: 5, maxlength: 300},
});

module.exports = db.model('Game', gameSchema);

