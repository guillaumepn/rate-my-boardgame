const express = require("express");

const Rating = require('../models/rating');

const router = express.Router();

module.exports = router.get('/', (req, res) => {
    console.log('route ratings');
    Rating.find(req.query)
        .then(data => {
        res.status(200).send(data);
    })
});
