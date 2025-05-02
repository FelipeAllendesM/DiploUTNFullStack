var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

/* GET Listar Novedades. */
router.get('/', async function (req, res, next) {
    var novedades = await novedadesModel.getNovedades();
    res.render('admin/novedades', {     //novedades.hbs
        layout: 'admin/layout',         //layout.hbs
        persona: req.session.nombre,
        novedades
    });
});

/* GET Mostrar Formulario. */
router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {     //agregar.hbs
        layout: 'admin/layout',         //layout.hbs
    });
});


/* Agregar Novedades. */
router.post('/agregar', async (req, res, next) => {
    try {
        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            await novedadesModel.insertNovedad(req.body);
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true, message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true, message: 'No se cargo la Novedad'
        })
    }
});


module.exports = router;