const express = require("express");
const Rating = require('../models/rating');
const router = express.Router();
const verifyToken = require('../middlewares/security');

router.get('/', (req, res) => {
    console.log('route ratings');
    Rating.find(req.query)
        .then(data => {
        res.status(200).send(data);
    })
});

// Routes POST

router.post('/', verifyToken, (req, res) => {
    const rating = new Rating(req.body);
    Rating.findOne({game: rating.game, user: rating.user})
        .then(data => {
            if (!data) {
                rating.save();
                res.send(rating);
            } else {
                Rating.update({game: rating.game, user: rating.user}, {score: rating.score, created_at: Date.now()})
                    .then(data => {
                        res.status(200).send(data);
                    })
                console.log('update', rating)
            }
        console.log('from server', data)
    });
});

module.exports = router;
