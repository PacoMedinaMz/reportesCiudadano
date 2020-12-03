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

    router.post('/user/exist', function (req, res) {
        db.query(
            'SELECT Correo FROM Usuario WHERE Correo = ? LIMIT 1',
            [req.body.correo],
            (error, results) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    console.error(results);
                    if (results[0] != null) {
                        res.status(200).json({exist: '1'});
                    } else {
                        res.status(200).json({exist: '0'});
                    }
                }
            }
        );
    });





    return router;
}

module.exports = createRouter;