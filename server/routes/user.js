const express = require("express");

const User = require('../models/user');

const router = express.Router();

module.exports = router.get('/', (req, res) => {
    console.log('route users');
    User.find(req.query)
        .then(data => res.status(200).send(data));
});

router.get('/:year', (req, res) => {
    User.findOne({year: req.params.year})
        .then(data => res.status(200).send(data));
});
