const express = require('express');
const loginRoute = express.Router();


loginRoute.use(function(req, res, next){
    console.log("Login Called on " +Date.now());
    next();
});


module.exports = loginRoute;