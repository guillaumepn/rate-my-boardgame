const express = require("express");
const Rating = require('../models/rating');
const Game = require('../models/game');
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
    const rating = new Rating({score: req.body.score, game: req.body.game, user: req.user.username});

    Rating.findOne({game: rating.game, user: req.user.username})
        .then(data => {
            if (!data) {
                rating.save();

                Game.findOne({_id: rating.game})
                    .then(game => {
                        game.ratings.push(rating);
                        game.save();
                    })
                    .catch(error => console.log(error));

                res.send(rating);
            } else {
                let oldRating = data;
                oldRating.score = rating.score;
                console.log('oldrating before', oldRating)
                oldRating.save();
                console.log('oldrating after', oldRating)

                Game.findOne({_id: oldRating.game})
                    .then(game => {
                        console.log('game before pull', game)
                        game.ratings.pull({_id: oldRating._id});
                        console.log('game after pull', game)
                        game.ratings.push(oldRating);
                        console.log('game after push', game)
                        game.save();
                    })
                    .catch(error => console.log(error));

                res.send(oldRating);
            }
        });
});

module.exports = router;
