const express = require('express');

function createRouter(db) {
    const router = express.Router();
    const owner = '';



    router.get('/', (req, res, next) => {
        res.status(500).json({ mensaje: 'Si sirve :)' });
    });

    
    




    return router;
}

module.exports = createRouter;