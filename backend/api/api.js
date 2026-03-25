const express = require('express');
const router = express.Router();
const database = require('../sql/database.js');
const fs = require('fs/promises');

//!Multer
const multer = require('multer'); //?npm install multer
const path = require('path');

const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, path.join(__dirname, '../uploads'));
    },
    filename: (request, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname); //?egyedi név: dátum - file eredeti neve
    }
});

const upload = multer({ storage });

//!Endpoints:
//?GET /api/test
router.get('/test', (request, response) => {
    response.status(200).json({
        message: 'Ez a végpont működik.'
    });
});

//?GET /api/testsql
router.get('/testsql', async (request, response) => {
    try {
        const selectall = await database.selectall();
        response.status(200).json({
            message: 'Ez a végpont működik.',
            results: selectall
        });
    } catch (error) {
        response.status(500).json({
            message: 'Ez a végpont nem működik.'
        });
    }
});
router.post('/konyv', upload.none(), async (request, response) => {
    try {
        const form = request.body;
        await database.insertKonyv(form.cim, form.szerzo, form.kiado, form.kiadasev, form.oldalszam, form.konyvmufaja, form.konyvarasarlasiar);
        response.status(200).json({
            message: 'Könyv sikeresen feltöltve.'
        });
    } catch (error) {
        response.status(500).json({
            message: error.message

        });
    }
});

router.post('/autofeltoltes', upload.none(), async (request, response) => {
    try {

        const form = request.body;
        await database.insertAuto(form.marka, form.gyartasiev, form.alvazszam, form.loero, form.kilometerallasa, form.uzemanyagtipus, form.fogyasztas, form.uzemanyagszint);
        response.status(200).json({
            message: 'Autó sikeresen feltöltve.'
        });
    } catch (error) {
        response.status(500).json({
            message: error.message

        });
    }
});

module.exports = router;
