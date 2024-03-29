const {verifyJWTToken} = require('../lib/auth');

const verifyToken = (req, res, next) => {
    if (req.path === '/login_check' || req.path === '/users/register') {
        next();
    } else {
        const auth = req.get('Authorization');
        if (!auth || !auth.startsWith('Bearer')) {
            res.sendStatus(401);
        } else {
            verifyJWTToken(auth.replace('Bearer ', ''))
                .then(decodedToken => {
                    req.user = decodedToken;
                    next();
                })
                .catch(error => res.status(400).send({
                    error: 'JWT token invalid',
                    details: error
                }));
        }
    }
};

module.exports = verifyToken;
