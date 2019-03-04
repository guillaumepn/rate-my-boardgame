const mongoose = require('mongoose');
const db = require('./lib/db');

// Models
const Game = require('./models/game');
const Rating = require('./models/rating');
const User = require('./models/user');

const user = new User();
user.username = 'jojo';
user.save()
    .then(() => console.log("saved user"))
    .catch(error => console.log(error));

User.find().then(items => console.log('users', items)).catch(error => console.log(error));

const game = new Game();
game.title = 'Monopoly';
game.save()
    .then(() => console.log("saved game"))
    .catch(error => console.log(error));

Game.find().then(items => console.log('games', items)).catch(error => console.log(error));

const rating = new Rating();
rating.score = 8;
rating.save()
    .then(() => console.log("saved rating"))
    .catch(error => console.log(error));

Rating.find().then(items => console.log('ratings', items)).catch(error => console.log(error));
