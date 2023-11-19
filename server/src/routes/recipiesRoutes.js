const recipiesRouter = require('express').Router();
const recipieController = require('../controllers/recipiesController.js')

recipiesRouter.get('/', recipieController.getAllRecipies);
recipiesRouter.get('/last-three', recipieController.getLastThreeRecipies);
recipiesRouter.get('/:id', recipieController.getRecipieById);
recipiesRouter.post('/create', recipieController.createRecipie);
recipiesRouter.patch('/:id/edit', recipieController.editRecipie);
recipiesRouter.delete('/:id/delete', recipieController.deleteRecipie);

module.exports = recipiesRouter
