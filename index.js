const express = require('express'),
    engines = require('consolidate');
const path = require('path');
const hbs = require('express-handlebars');
const fs = require('fs');

var app = express(),
    db;

var Inicio = 0;
var Holi = 0;
var Otro = 0;

var texto = fs.readFileSync('contadores.txt', 'utf8');

function escribirTXT() {
    var nwTXT;
    nwTXT = "[Inicio: " + Inicio + ", Holi: " + Holi + ", Otro: " + Otro + "]";
    fs.writeFileSync('contadores.txt', nwTXT);
}

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
    Inicio += 1;
    escribirTXT();
    res.render('index', {
        titulo: 'Hola'
    });
});

//rutas
app.get('/Otro', (req, res) => {
    Otro += 1;
    escribirTXT();
    res.render('Otro', {
        titulo: 'Hola'
    });
});

//rutas
app.get('/Holi', (req, res) => {
    Holi += 1;
    escribirTXT();
    res.render('Holi', {
        titulo: 'Hola'
    });
});

app.listen(3000);