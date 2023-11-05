const express = require('express');
const expressConfig = require('./config/expressConfig.js');
const dbConnect = require('./config/dbConfig.js');
const routesConfig = require('./config/routesConfig.js')


const app = express();
const PORT = 3000;

expressConfig(app);

dbConnect()
    .then(() => {
        console.log('DB connected successfully')
        app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
    })
    .catch(error => console.log('DB error : ', error));

routesConfig(app);


// app.get('/', (req, res) => {
//     res.send("hello sssss")
// })

// app.get('/recipies', (req, res) => {
//     res.send("wait for them")
// })

