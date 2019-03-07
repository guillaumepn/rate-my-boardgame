const express = require("express");

const {createToken} = require("../lib/auth");
const User = require('../models/user');


const router = express.Router();

router.post('/', (req, res) => {
    if (req.body.username && req.body.password) {
        User.findOne(req.body)
            .then(user => {
                if (user) {
                    const token = createToken(user);
                    console.log(token);
                    res.send({token});
                } else {
                    res.status(400).send({
                        error: 'User not found or invalid credentials'
                    })
                }
            })
            .catch((err) => console.log(err));
    } else {
        res.status(400).send({
            error: 'Invalid username/password'
        })
    }
});


module.exports = router;


