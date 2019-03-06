const express = require("express");

const {createToken} = require("../lib/auth");
const User = require('../models/user');


const router = express.Router();

// Routes GET

router.post('/', (req, res) => {
    console.log(req.body);
    if (req.body.username && req.body.password) {
        const query = User.findOne(req.body);
        query.exec()
            .then((user) => {
                if (user) {
                    const token = createToken(req.body);
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


