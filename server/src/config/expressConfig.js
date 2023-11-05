const express = require('express');
const cors = require('../middlewares/cors.js');
const cookieParser = require('cookie-parser');

function ExpressConfig(app) {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json({ extended: true }));
    app.use(cors());
    app.use(cookieParser());
};

module.exports = ExpressConfig;