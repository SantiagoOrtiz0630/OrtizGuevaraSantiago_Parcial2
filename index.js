const express = require('express'),
engines = require('consolidate');
const path = require('path');
const hbs = require('express-handlebars');

var app = express(),
db;

//middlewares

app.use(express.static('public'));

//render app
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layout/'
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//rutas
app.get('/', (req, res) => {
    res.render('index', {titulo: 'Hola'});
});

//rutas
app.get('/Otro', (req, res) => {
    res.render('Otro', {titulo: 'Hola'});
});

//rutas
app.get('/Holi', (req, res) => {
    res.render('Holi', {titulo: 'Hola'});
});

app.listen(3000);