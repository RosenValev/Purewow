const User = require('../models/User.js');
const generateToken = require('../utils/generateToken.js');

const register = async (req, res) => {
    try {
        const userData = req.body;
        const user = await User.findOne({ username: userData.username });

        if (user) {
            throw new Error('Username already exists');
        }

        const userCreated = await User.create(userData);
        const token = generateToken(userCreated);
        const data = {
            id: userCreated._id,
            username: userCreated.username,
            email: userCreated.email,
            avatar: userCreated.avatar,
            createdAt: userCreated.createdAt,
            updatedAt: userCreated.updatedAt,
            token,
        }
        res.status(200).json(data)
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    register,
}