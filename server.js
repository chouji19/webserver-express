const express = require('express')
const app = express()

const hbs = require('hbs');

require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'))


hbs.registerPartials(__dirname + '/views/parciales');
//Express hbs 
app.set('view engine', 'hbs');


hbs.registerHelper('getAnio', () => new Date().getFullYear());

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');

});

app.get('/', (req, res) => {
    // res.send('Hola Mundo')
    res.render('home', {
        nombre: 'Camilo',
        getAnio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    // res.send('Hola Mundo')
    res.render('about');
});

app.listen(port, () => console.log('Escuchando en puerto ' + port));