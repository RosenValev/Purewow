const recipiesRouter = require('express').Router();
const recipieController = require('../controllers/recipiesController.js')

recipiesRouter.get('/', recipieController.getAllRecipies);
recipiesRouter.get('/last-three', recipieController.getLastThreeRecipies);
recipiesRouter.get('/:id', recipieController.getRecipieById);
recipiesRouter.delete('/:id/delete', recipieController.deleteRecipie);
recipiesRouter.post('/create', recipieController.createRecipie);

module.exports = recipiesRouter
