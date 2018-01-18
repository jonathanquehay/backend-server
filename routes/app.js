var express = require('express');

var app = express();

//Definir rutas. Next: Cuando se ejecute continue con las otras peticiones

app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    })
});

module.exports = app;