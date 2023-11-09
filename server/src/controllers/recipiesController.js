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
}
module.exports = {
    createRecipie,
}