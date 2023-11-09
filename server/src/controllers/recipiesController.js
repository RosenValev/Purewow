const Recipie = require('../models/Recipie.js');

//CREATE
const createRecipie = async (req, res) => {
    try {
        const { title, imageUrl, description, prepTime, cookTime, totalTime, serves, ingredients, directions } = req.body;

        if (!title || !imageUrl || !description || !prepTime || !cookTime || !totalTime || !serves || !ingredients || !directions) {
            return res.status(404).json({ message: `All fields are required!` });
        }

        const createdRecipie = await Recipie.create(req.body);
        res.status(200).json(createdRecipie);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
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
        res.status(500).json({ message: err.message });
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
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    createRecipie,
    getAllRecipies,
    getRecipieById
}