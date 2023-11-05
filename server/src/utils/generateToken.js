const jwt = require('jsonwebtoken');
const SECRET = "alabalaportukala";

function generateToken(user) {
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email
    }

    const token = jwt.sign(payload, SECRET, { expiresIn: '1d' });
    return token;
}

module.exports = generateToken;