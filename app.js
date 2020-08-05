const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');


//connnection to mongoDB
const db = require('./db/db.js');
//Custom imports
const userRouter = require('./server/routers/all_routes.js');
const app = express();

//Adding client Path
console.log(path.join(__dirname, "./client"));
app.use(express.static(path.join(__dirname, "./client"))); 

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(userRouter);


//Listeniong to Port
const server = app.listen(5000, '0.0.0.0');

// server timeout
server.timeout = 50000;

process.on('exit', (code) => {
    mongoose.connection.close();
    console.log(`About to exit with code: ${code}`);
});


process.on('SIGINT', function() {
    console.log("Caught interrupt signal");
    process.exit();
});

process.on('uncaughtException', function(err) {
    mongoose.connection.close();
    console.log('Uncaught exception has been handled. Exception caught is ');
    console.log(err.toString());
    console.log(err.stack);
    process.exit();
});