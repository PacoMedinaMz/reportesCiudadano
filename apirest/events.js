const { json } = require('express');
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
                    if (results[0] != null) {
                        res.status(200).json({exist: '1'});
                    } else {
                        res.status(200).json({exist: '0'});
                    }
                }
            }
        );
    });

    router.post('/user/login', function (req, res) {
        db.query(
            'SELECT Nombre, Id_usuario FROM Usuario WHERE Correo = ? AND password = ? LIMIT 1',
            [req.body.correo, req.body.pass],
            (error, results) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    if (results[0] != null) {
                        res.status(200).json({exist: '1', nombre: results[0].Nombre, id: results[0].Id_usuario});
                    } else {
                        res.status(200).json({exist: '0'});
                    }
                }
            }
        );
    });

    //-----------------------------------------

    router.post('/empresa/registro', function (req, res) {
        db.query(
            'INSERT INTO Institucion (Nombre, Mision, Tipo, Passwd, Correo) VALUES (?,?,?,?,?)',
            [req.body.nombre, req.body.mision, req.body.tipo, req.body.pass, req.body.correo],
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

    router.post('/empresa/exist', function (req, res) {
        db.query(
            'SELECT Correo FROM Institucion WHERE Correo = ? LIMIT 1',
            [req.body.correo],
            (error, results) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    if (results[0] != null) {
                        res.status(200).json({exist: '1'});
                    } else {
                        res.status(200).json({exist: '0'});
                    }
                }
            }
        );
    });

    router.post('/empresa/login', function (req, res) {
        db.query(
            'SELECT Nombre, Id_institucion FROM Institucion WHERE Correo = ? AND Passwd = ? LIMIT 1',
            [req.body.correo, req.body.pass],
            (error, results) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    if (results[0] != null) {
                        res.status(200).json({exist: '1', nombre: results[0].Nombre, id: results[0].Id_institucion});
                    } else {
                        res.status(200).json({exist: '0'});
                    }
                }
            }
        );
    });

    
    router.post('/rUrgente/alta', function (req, res) {
        db.query(
            'INSERT INTO Reporte (Id_reporte, Id_usuario,calle, frac, tel, action, situacion, tipo,estado) VALUES (?,?,?,?,?,?,?,"urgente","activo")',
            [req.body.id, req.body.id_usuario,req.body.calle, req.body.frac, req.body.tel, req.body.action, req.body.situacion],
            (error) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'alta lista' });
                }
            }
        );
    });

    router.post('/rNormal/alta', function (req, res) {
        db.query(
            'INSERT INTO Reporte (Id_reporte, Id_usuario, nombre, correo,calle, frac, tel, action, situacion,tipo,estado) VALUES (?,?,?,?,?,?,?,?,?,"normal","activo")',
            [req.body.id ,req.body.id_usuario, req.body.nombre ,req.body.correo ,req.body.calle, req.body.frac, req.body.tel, req.body.action, req.body.situacion],
            (error) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'alta lista' });
                }
            }
        );
    });

    router.post('/rAnonimo/alta', function (req, res) {
        db.query(
            'INSERT INTO Reporte (Id_reporte, Id_usuario, calle, frac, tel, action, situacion,tipo,estado) VALUES (?,?,?,?,?,?,?,"anonimo","activo")',
            [req.body.id ,req.body.id_usuario,req.body.calle, req.body.frac, req.body.tel, req.body.action, req.body.situacion],
            (error) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'alta lista' });
                }
            }
        );
    });

    router.post('/consulta/reporte', function (req, res) {
        db.query(
            'SELECT Id_reporte, action, situacion FROM Reporte WHERE Id_reporte = ?',
            [req.body.buscar],
            (error,results) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else{
                    res.status(200).json(results);
                }
            }
        );
    });
  

    router.post('/crud/puesto', function (req, res) {
        db.query(
            'INSERT INTO Puesto (Id_puesto, Puesto, Descrip ) VALUES (?,?,?)',
            [req.body.id ,req.body.puesto, req.body.descrip],
            (error) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'alta lista' });
                }
            }
        );
    });

    router.post('/crud/empleado', function (req, res) {
        db.query(
            'INSERT INTO Empleado (Id_empleado, Nombre, Ape_paterno, Ape_materna, Sexo, Fecha_nacimiento, Activo, Id_institucion ) VALUES (?,?,?,?,?,?,?,?)',
            [req.body.id ,req.body.nombre, req.body.apePat, req.body.apeMat ,req.body.sexo, req.body.fecha, req.body.activo, req.body.id_institucion],
            (error) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'alta lista' });
                }
            }
        );
    });

    router.post('/crud/atiende', function (req, res) {
        db.query(
            'INSERT INTO Atiende (Id_empleado, Id_reporte ) VALUES (?,?)',
            [req.body.idE, req.body.idR],
            (error) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'alta lista' });
                }
            }
        );
    });

    router.post('/crud/realiza', function (req, res) {
        db.query(
            'INSERT INTO Encargado_de (Id_puesto, Id_empleado ) VALUES (?,?)',
            [req.body.idP, req.body.idE],
            (error) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'alta lista' });
                }
            }
        );
    });

    router.post('/crud/final', function (req, res) {
        db.query(
            'INSERT INTO Final (Id_final, Descrip, Fecha, Id_reporte ) VALUES (?,?,?,?)',
            [req.body.id, req.body.des, req.body.fecha, req.body.idR],
            (error) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'alta lista' });
                }
            }
        );
    });

    router.post('/crud/servicio', function (req, res) {
        db.query(
            'INSERT INTO Servicio (Id_servicio, Nombre, Des ) VALUES (?,?,?)',
            [req.body.id, req.body.nom, req.body.des],
            (error) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'alta lista' });
                }
            }
        );
    });

    router.post('/consulta/reporteG', function (req, res) {
        db.query(
            'SELECT Id_reporte, action, calle, frac, situacion FROM Reporte;',
            [req.body.buscar],
            (error,results) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else{
                    res.status(200).json(results);
                    
                }
            }
        );
    });

    //Numero de reportes Activos
    router.get('/consulta/numReportes', function (req, res) {
        db.query(
            'SELECT COUNT(Id_reporte) AS numeroReportes FROM Reporte WHERE estado = "activo" ;',
            (error,results) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else{
                    res.status(200).json(results); 
                }
            }
        );
    });

    //Numero de reportes Solucionados
    router.get('/consulta/numReportesSol', function (req, res) {
        db.query(
            'SELECT COUNT(Id_reporte) AS numeroReportesSol FROM Reporte WHERE estado = "sol" ;',
            (error,results) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else{
                    res.status(200).json(results); 
                }
            }
        );
    });

    //Numero de reportes Pendientes
    router.get('/consulta/numReportesPen', function (req, res) {
        db.query(
            'SELECT COUNT(Id_reporte) AS numeroReportesPen FROM Reporte WHERE estado = "pend" ;',
            (error,results) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else{
                    res.status(200).json(results); 
                }
            }
        );
    });



    return router;
}

module.exports = createRouter;
