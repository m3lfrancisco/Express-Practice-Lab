// Load express
const express = require('express');
const path = require('path');

// Require the favoritefoods db
const favoritefoodsDb = require('./data/favoritefoods-db');

// Create express app
const app = express();

// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Mount routes
app.get('/', function(req, res) {
    res.redirect('/home');
});

app.get('/home', function(req, res) {
    res.render('home');
});

app.get('/favoritefoods', function (req, res) {
    res.render('favoritefoods/index', {
        favoritefoods: favoritefoodsDb.getAll()
    });
});


// Tell app to listen on port 5500 for HTTP requests from clients
app.listen(5500, function() {
    console.log('Listening on port 5500');
});