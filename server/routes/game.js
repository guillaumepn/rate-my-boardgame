const express = require("express");

const Game = require('../models/game');

const router = express.Router();

module.exports = router.get('/', (req, res) => {
    console.log('route games');
    Game.find(req.query)
        .then(data => {
        res.status(200).send(data);
    })
});
