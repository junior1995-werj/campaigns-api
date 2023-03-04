const express = require('express');
const router = express.Router();
// Colocar controller que ainda não foi criado
const avertiser_controller = require('../controllers/avertiser.controller');
// teste simples
router.post('/', avertiser_controller.create);
router.get('/', avertiser_controller.all_avertiser);
module.exports = router;