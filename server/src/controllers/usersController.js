const User = require('../models/User.js');
const generateToken = require('../utils/generateToken.js');

//GET ALL
const getAll = async (req, res) => {
    try {
        const users = await User.find()
        if (!users?.length) {
            throw new Error(404, 'Users not found!');
        }
        res.status(200).json(users);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
};

//GET ONE
const getOne = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id)

        if (!user) {
            return res.status(404).json({ message: `User not found! with ID ${id}` });
        }
        res.status(200).json(user);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
};

//CREATE
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
        res.status(200).json(data);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
};

//UPDATE
const updateOne = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
        if (!user) {
            return res.status(404).json({ message: `User not found! with ID ${id}` });
        }
        res.status(200).json(user);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
};

//DELETE

const deleteOne = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: `User not found! with ID ${id}` });
        }
        res.status(200).json(user)
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
}





module.exports = {
    register,
    getAll,
    getOne,
    updateOne,
    deleteOne,
}