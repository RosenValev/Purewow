const usersRouter = require('express').Router();
const usersControler = require('../controllers/usersController.js')

usersRouter.get('/', usersControler.getAll);
usersRouter.get('/:id', usersControler.getOne);
usersRouter.put('/:id/update', usersControler.updateOne);
usersRouter.post('/register', usersControler.createOne);
usersRouter.post('/login', usersControler.login);
usersRouter.post('/logout', usersControler.logout);
usersRouter.delete('/:id/delete', usersControler.deleteOne);

module.exports = usersRouter;