const jwt = require('jsonwebtoken');

const createToken = (user) => {
    return jwt.sign({
        username: user.username,
    }, process.env.JWT_SECRET, {
        expiresIn: 3600,
        algorithm: 'HS256'
    });
};

const verifyJWTToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (error, decodedToken) => {
            if (error || !decodedToken) {
                reject(error);
            }

            resolve(decodedToken);
        })
    })
};

module.exports = {
    createToken,
    verifyJWTToken
};
