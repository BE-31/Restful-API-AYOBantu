const express = require('express');
const router = express.Router();
const campaignController = require('../controllers/campaign.controller.js');
const auth = require('../middlewares/auth.js');

//get all campaign data
router.get("/", auth("getAllCampaign"), campaignController.getAllCampaign);

//get campaign by id user
router.get("/:id", auth("getCampaignByIdUser"), campaignController.getCampaignByIdUser);

//get campaign by kategori
router.get('/kategori/:id',auth('getCampaignByCategory'), campaignController.getCampaignByCategory);

//create campaign
router.post("/", auth("createCampaign"), campaignController.createCampaign);

//update campaign
router.put('/:id', auth('updateCampaignById'), campaignController.updateCampaignById);

//delete campaign by id
router.delete('/:id', campaignController.deleteCampaignById);

module.exports = router;
