const mongoose = require('mongoose');

const recipieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required'],
        minLength: [2, 'title must be at least 2 characters long'],
    },
    imageUrl: {
        type: String,
        required: [true, 'image is required'],
        match: [/^https?:\/\//, 'Invalid URL'],
    },
    description: {
        type: String,
        required: [true, 'bookReview is required'],
        minLength: [10, 'bookReview must be at least 10 characters long'],
    },
    prepTime: {
        type: Number,
        required: [true, 'prepTime is required'],
    },
    cookTime: {
        type: Number,
        required: [true, 'cookTime is required'],
    },
    totalTime: {
        type: Number,
        required: [true, 'totalTime is required'],
    },
    serves: {
        type: Number,
        required: [true, 'Serves is required'],
    },
    ingredients: {
        type: String,
        required: [true, 'Ingridients is required'],
    },
    directions: {
        type: String,
        required: [true, 'Directions is required'],
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
});

const Recipie = mongoose.model('Recipie', recipieSchema);

module.exports = Recipie;