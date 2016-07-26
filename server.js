var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var multer  = require('multer');
var config = require('./config/index.js');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/OurDB');
var nconf = require('nconf');
var path = require('path');

nconf.argv()
    .env()
    .file({ file: './config/config.json'});



app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(cookieParser());

app.use(session({
    secret: nconf.get('session:secret'),
    cookie: nconf.get('session:cookie'),
    resave: true, // добавил так как без этого была обибка
    saveUninitialized: true, // это тоже
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

<<<<<<< HEAD
=======
//todo закоментил, чтобы не вылезал первый андефайн
//console.log(nconf.get('name'));
>>>>>>> Backend

app.use(express.static('build'));

app.set('views', './build');
app.set('view engine', 'jade');

require('./routes')(app);


app.listen(3035);
