const express = require('express');
const router = express.Router();
const campaignController = require('../controllers/campaign.controller');
const auth = require('../middlewares/auth.js');

//get all verified campaign data
router.get('/',  campaignController.getAllCampaign);

//get campaign by id
router.get('/:id', campaignController.getCampaignById);

//get campaign by kategori
router.get('/kategori/:id', campaignController.getCampaignByCategory);

//create campaign
router.post('/', auth('campaign'), campaignController.createCampaign);

//update campaign
router.put('/:id', auth('campaign'), campaignController.updateCampaignById);

//delete campaign by id
router.delete('/:id', auth('campaign'), campaignController.deleteCampaignById);

module.exports = router;
