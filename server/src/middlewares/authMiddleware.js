const jwt = require('jsonwebtoken');
const { SECRET } = require('../utils/secret.js')

module.exports = async (req, res, next) => {
    // const token = req.cookies.token;
    const token = req.headers.auth;

    try {
        const data = await jwt.verify(token, SECRET);
        req.user = data;
    } catch (err) {
        // res.clearCookie(token);
        return res.status(403).json({ message: 'Invalid token!' });
    }
    next();
};