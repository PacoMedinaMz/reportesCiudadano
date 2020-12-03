const express = require('express');

function createRouter(db) {
    const router = express.Router();
    const owner = '';
    router.use(express.json());



    router.get('/', (req, res, next) => {
        res.status(500).json({ mensaje: 'Si sirve :)' });
    });

    router.post('/registro', function (req, res) {
        db.query(
            'INSERT INTO Usuario (Nombre, Ape_Pat, Ape_Mat, Sexo, Fecha_Nac, password, Correo) VALUES (?,?,?,?,?,?,?)',
            [req.body.nombre, req.body.apePat, req.body.apeMat, req.body.sexo, req.body.nacimiento, req.body.pass, req.body.correo],
            (error) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'registrado' });
                }
            }
        );
    });





    return router;
}

module.exports = createRouter;