const express = require('express');
const serverless = require ('serverless-http');
var usersRouter = require('./routes/users');

const app = express();
const router = express.Router();

//E' necessario usare per tutte le route il prefisso /.netlify/functions
app.use('/.netlify/functions/api/users', usersRouter);

module.exports = app;
module.exports.handler= serverless(app);  //Qui è dove esportiamo le nostre funzioni per netlify