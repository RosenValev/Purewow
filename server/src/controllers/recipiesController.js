const Recipie = require('../models/Recipie.js');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../utils/secret.js')

//CREATE
const createRecipie = async (req, res) => {
    try {
        const { title, imageUrl, description, prepTime, cookTime, totalTime, serves, ingredients, directions, token } = req.body;

        if (!title || !imageUrl || !description || !prepTime || !cookTime || !totalTime || !serves || !ingredients || !directions) {
            return res.status(404).json({ message: `All fields are required!` });
        }

        const decodedToken = await jwt.verify(token, SECRET);
        const createdRecipie = await Recipie.create({ title, imageUrl, description, prepTime, cookTime, totalTime, serves, ingredients, directions, owner: decodedToken._id });

        res.status(200).json(createdRecipie);
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message });
    }
};

//GET ALL 
const getAllRecipies = async (req, res) => {
    try {
        const recipies = await Recipie.find().populate('owner');
        if (!recipies) {
            return res.status(404).json({ message: `Recipies not found` });
        }
        res.status(200).json(recipies);
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message });
    }
}

//GET LAST THREE RECIPIES
const getLastThreeRecipies = async (req, res) => {
    try {
        const lastThreeRecipies = await Recipie.find().sort({ createdAt: -1 }).limit(3)
        if (!lastThreeRecipies) {
            return res.status(404).json({ message: `Recipies not found` });
        }
        res.status(200).json(lastThreeRecipies);
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message });
    }
}

//GET BY ID
const getRecipieById = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(404).json({ message: `Id is required` });
        }
        const recipie = await Recipie.findById(id).populate('owner');
        if (!recipie) {
            return res.status(404).json({ message: `Recipie not found` });
        }
        res.status(200).json(recipie);
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message });
    }
}

//DELETE 
const deleteRecipie = async (req, res) => {
    const { id } = req.params
    try {
        const deletedRecipie = await Recipie.findByIdAndDelete(id).lean()
        if (!deletedRecipie) {
            return res.status(404).json({ message: `Recipie not found! with ID ${id}` });
        }
        res.status(200).json({ message: `Recipie with ID ${id} deleted successfully` })
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message });
    }
}

//EDIT
const editRecipie = async (req, res) => {
    const { id } = req.params;
    const {
        title,
        imageUrl,
        description,
        prepTime,
        cookTime,
        totalTime,
        serves,
        ingredients,
        directions,
    } = req.body;

    try {
        const updatedRecipie = await Recipie.findByIdAndUpdate(id,
            {
                title,
                imageUrl,
                description,
                prepTime,
                cookTime,
                totalTime,
                serves,
                ingredients,
                directions,
            },
            { new: true, runValidators: true })
        if (!updatedRecipie) {
            return res.status(404).json({ message: `Recipie not found! with ID ${id}` });
        }
        res.status(200).json(updatedRecipie)
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message });
    }
}

module.exports = {
    createRecipie,
    getAllRecipies,
    getRecipieById,
    getLastThreeRecipies,
    deleteRecipie,
    editRecipie,
}