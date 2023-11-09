const userRouter = require('../routes/userRoutes.js')
const recipieRouter = require('../routes/recipiesRoutes.js')

function routesConfig(app) {
    app.use('/users', userRouter);
    app.use('/recipies', recipieRouter);
};

module.exports = routesConfig