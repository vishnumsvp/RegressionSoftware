const express= require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config =require('./config/main');
const fileUpload = require('express-fileupload');
//Configurations 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload({ safeFileNames: true, preserveExtension: 4 }));
mongoose.connect(config.database)

//Router Config
app.use('/',function(req, res, next){
    console.log("First Route Initiated");
    next();
});
app.use('/login',require('./app/route/loginRouter'));
app.use('/template',require('./app/route/templateRouter'));


app.listen(process.env.PORT|| 3000,function(){
    console.log("Listening started in Port 3000");
});