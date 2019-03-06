const express = require("express");
const router = express.Router();

// Models
const User = require('../models/user');
const Game = require('../models/game');
const Rating = require('../models/rating');


router.get('/', (req, res) => {
    let user = new User();
    user.username = 'jojo';
    user.password = 'test';
    user.save()
        .then(() => console.log("saved user"))
        .catch(error => console.log(error));

    user = new User();
    user.username = 'toto';
    user.password = 'test';
    user.save()
        .then(() => console.log("saved user"))
        .catch(error => console.log(error));


    const game = new Game();
    game.title = 'Tricot';
    game.year = 2018;
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

    res.status(200).send();
});

module.exports = router;
