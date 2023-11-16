const recipiesRouter = require('express').Router();
const recipieController = require('../controllers/recipiesController.js')

recipiesRouter.get('/', recipieController.getAllRecipies);
recipiesRouter.get('/last', recipieController.getLastThreeRecipies);
recipiesRouter.get('/:id', recipieController.getRecipieById);
recipiesRouter.post('/create', recipieController.createRecipie);

module.exports = recipiesRouter
