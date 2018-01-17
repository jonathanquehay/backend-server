// Requires : Importacion de librerias de terceros para que funcione ALGO

var express = require('express');
//Para utilizar base de datos
var mongoose = require('mongoose');
//Inicializar variables 

var app = express();

//Conexión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err; //Si la base de datos no funciona se detiene todos los procesos

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
});
//Definir rutas. Next: Cuando se ejecute continue con las otras peticiones

app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    })
});

// Escuchar peticiones, puede ser cualquier puerto

app.listen(3000, () => {
    console.log('Express server corriendo en puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});