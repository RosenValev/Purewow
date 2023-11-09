const recipiesRouter = require('express').Router();
const recipieController = require('../controllers/recipiesController.js')

recipiesRouter.post('/create', recipieController.createRecipie);

module.exports = recipiesRouter
