const userRouter = require('../routes/userRoutes.js')


module.exports = (app) => {
    app.use('/users', userRouter);

};