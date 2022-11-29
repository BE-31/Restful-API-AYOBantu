const express = require('express');
const router = express.Router();
const campaignController = require('../controllers/campaign.controller.js');
const auth = require('../middlewares/auth.js');

//get all campaign data
router.get("/all", auth("getAllCampaign"), campaignController.getAllCampaign);

//get all verified campaign
router.get("/", campaignController.getAllVerifiedCampaign);

//get all campaign by a user
router.get("/user/:id", campaignController.getCampaignByIdUser);

//get campaign by id
router.get("/:id", campaignController.getCampaignById);

//get campaign by kategori
router.get('/kategori/:id', campaignController.getCampaignByCategory);

//create campaign
router.post("/", auth("createCampaign"), campaignController.createCampaign);

//update campaign
router.put('/:id', auth('updateCampaignById'), campaignController.updateCampaignById);

//delete campaign by id
router.delete('/:id', campaignController.deleteCampaignById);

module.exports = router;
