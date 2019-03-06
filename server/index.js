const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// const verifyToken = require('./middlewares/security');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const userRouter = require('./routes/user');
const gameRouter = require('./routes/game');
const ratingRouter = require('./routes/rating');
const tokenRouter = require('./routes/generateToken');
const fixtureRouter = require('./routes/fixture');

app.use('/users', userRouter);
app.use('/games', gameRouter);
app.use('/ratings', ratingRouter);
app.use('/login_check', tokenRouter);
app.use('/fixture', fixtureRouter);

app.listen(3000, () => console.log('listening'));
