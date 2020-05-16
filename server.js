const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//se agrega el npm hbs y para no tenerlo junto
//se creo un archivo en donde se pondran todos los healpers 
// lo unico que se tiene que hacer es poner en un 
//requiere la direccion de los healpers
const hbs = require('hbs');
require('./hbs/helpers');


app.use(express.static(__dirname + '/public'));
//el hbs serbira para hacer el contenido dinamico
// esto es para tener todos los registros parciales
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    //res.send('Hola mundo');

    //    let salida = {
    //            nombre: 'Damian',
    //            edad: 22,
    //            url: req.url
    //        }
    //hace que la peticion salga
    //res.send(salida);
    res.render('home', {
        nombre: 'fernaNdo HerrerrA',

    });
});


app.get('/about', (req, res) => {
    res.render('about');
});


app.listen(port, () => {
    /// nota si no jala cambiar el puerto xd

    console.log(`Escuchando las peticiones desde el puerto ${port}`);
});