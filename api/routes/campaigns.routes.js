const express = require('express');
const router = express.Router();
// Colocar controller que ainda não foi criado
const campaigns_controller = require('../controllers/campaigns.controller');
// teste simples
router.post('/', campaigns_controller.create);
router.get('/', campaigns_controller.all_campaigns);
router.put('/:id', campaigns_controller.alter_campaign);
router.get('/:id', campaigns_controller.campaigns_by_id);

router.get('/advertiser/:id', campaigns_controller.campaigns_by_advertiser);
router.get('/campaigns-region/:region', campaigns_controller.best_campaign_by_region);
router.get('/testar', campaigns_controller.test);
module.exports = router;