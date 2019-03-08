const express = require("express");

const User = require('../models/user');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('route users');
    User.find(req.query)
        .then(data => res.status(200).send(data));
});


router.post('/register', (req, res) => {
    console.log('register');
    if (req.body.username && req.body.password) {
        User.findOne({username: req.body.username})
            .then(user => {
                console.log(user);

                if (user) {
                    console.log('User already exists');
                    res.status(400).send({
                        error: 'User already exists',
                        type: 'already-exists'
                    });
                } else {
                    const newUser = new User(req.body);
                    newUser.save()
                        .then(() => console.log("registered user"))
                        .catch(error => console.log(error));
                    res.status(200).send(newUser);
                }
                res.send(JSON.stringify(user));
            });
    } else {
        res.status(400).send({
            error: 'Invalid username/password',
            type: 'empty-fields'
        })
    }
});

module.exports = router;
