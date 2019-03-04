const express = require('express');
const bodyParser = require('body-parser');

// Models
const User = require('./models/user');
const Game = require('./models/game');
const Rating = require('./models/rating');

const verifyToken = require('./middlewares/security');

const app = express();

app.use(verifyToken);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const userRouter = require('./routes/user');
const gameRouter = require('./routes/game');
const ratingRouter = require('./routes/rating');

app.use('/users', userRouter);
app.use('/games', gameRouter);
app.use('/ratings', ratingRouter);

app.listen(3000, () => console.log('listening'));

const user = new User();
user.userName = 'jojo';
user.save()
    .then(() => console.log("saved user"))
    .catch(error => console.log(error));

User.find().then(items => console.log('users', items)).catch(error => console.log(error));

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
