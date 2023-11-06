const usersRouter = require('express').Router();
const usersControler = require('../controllers/usersController.js')

usersRouter.get('/', usersControler.getAll);
usersRouter.get('/:id', usersControler.getOne);
usersRouter.put('/:id', usersControler.updateOne);
usersRouter.post('/register', usersControler.register);
usersRouter.delete('/:id', usersControler.deleteOne);


module.exports = usersRouter;