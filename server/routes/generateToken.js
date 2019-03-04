const express = require("express");

const {createToken} = require("../lib/auth");

const router = express.Router();


// Routes GET

router.post('/', (req, res) => {
    const token = createToken(req.body);
    res.redirect('/');
});


module.exports = router;


