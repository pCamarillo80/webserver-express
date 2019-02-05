const express = require('express');
const app = express();
const hbs = require('hbs');

require('./helpers/helpers');

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials')



//express hbs
app.set('view engine', 'hbs');

app.get('/', (req, res) => {


    res.render('home', {
        nombre: 'Pily caMarillo Sandoval'
    });
});

app.get('/about', (req, res) => {


    res.render('about', {});
});


app.get('/data', (req, res) => {

    let salida = {
        nombre: "Pilar Camarillo",
        edad: 39,
        url: req.url

    }
    res.send(salida);
});

app.listen(port, () => {
    console.log(`Escuchado peticiones en el puerto ${port}`);
});