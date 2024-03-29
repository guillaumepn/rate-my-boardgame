const express = require("express");

const verifyToken = require('../middlewares/security');
const Game = require('../models/game');

const router = express.Router();


// Routes GET

router.get('/', (req, res) => {
    console.log('route games', req.query);
    Game.find(req.query)
        .then(data => {
            res.status(200).send(data);
        })
});

router.get('/single/:id', (req, res) => {
    Game.findOne({_id: req.params.id})
        .then(data => {
            console.log('from server', data)
            res.status(200).send(data);
        })
});

router.get('/:year', (req, res) => {
    Game.find({year: req.params.year})
        .then(data => {
            res.status(200).send(data);
        })
});

router.get('/:publisher', (req, res) => {
    Game.find({publisher: req.params.publisher})
        .then(data => {
            res.status(200).send(data);
        })
});


// Routes POST

router.post('/', verifyToken, (req, res) => {
    const game = new Game(req.body);
    game.save();
    res.send(game);
});

module.exports = router;
