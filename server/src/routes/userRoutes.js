const usersRouter = require('express').Router();
const usersControler = require('../controllers/usersController.js')

usersRouter.post('/register', usersControler.register);




module.exports = usersRouter;