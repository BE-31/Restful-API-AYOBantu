const Campaign = require("../models/campaign");
const mongoose = require('mongoose');

module.exports = {
    //get all verified campaign data
    getAllVerifiedCampaign: async (req, res) => {
      try {
        const campaign = await Campaign.find({"status": "terverifikasi"}, (err, result) => {
          if (result.length === 0) {
            res.status(200).json({
              message: "There's no campaign yet"
            })
          } else {
            res.status(200).json({
              message: "Success",
              data: result
            })
          }
        }).populate("user", "name").clone()
      } catch (err) {
          res.status(404).json({
              message: err.message
          })
      }
  },
    //get all campaign data
    getAllCampaign: async (req, res) => {
        try {
            const campaign = await Campaign.find().populate("user", "name");
            if(campaign.length === 0) {
                res.status(200).json({
                  message: "There's no campaign yet"
                })
              } else {
                res.status(200).json({
                  message: "success",
                  data: campaign
                })
              }
        } catch (err) {
            res.status(404).json({
                message: err.message
            })
        }
    },

    //get campaign by user id
    getCampaignByIdUser: async (req, res) => {
     const user = req.params.id
      try {
        const campaign = await Campaign.find({"user": user}, (err, result) => {
          if (result.length === 0) {
            res.status(200).json({
              message: "There's no campaign in this user yet"
            })
          } else {
            res.status(200).json({
              message: "Success",
              data: result
            })
          }
        }).clone()
      } catch(err) {
        res.status(404).json({
          message: err.message
        })
      }
    },

    //get campaign by id
    getCampaignById: async (req, res) => {
      const id = req.params.id
      try {
        const campaign = await Campaign.findById(id)

        res.status(200).json({
          message: "Success",
          data: campaign
        })
      } catch(error) {
        if (error.name == "NotFoundError") {
          res.status(404).json({
            message: "Not Found Error"
          });
        }
        else if(error.name == "ValidationError") {
          res.status(400).json({
            message: "Validation Error"
          });        
        }
        else {
          res.status(500).json({
            message: "Server Error"
          });
        }
      }
    },

    //get campaign by category
    getCampaignByCategory: async (req, res) => {
      const category = req.params.id
      try {
        const campaign = await Campaign.find({"category": category}, (err, result) => {
          if (result.length === 0) {
            res.status(200).json({
              message: "There's no campaign in this category yet"
            })
          } else {
            res.status(200).json({
              message: "Success",
              data: result
            })
          }
        }).populate("user", "name").clone()
      } catch(err) {
        res.status(404).json({
          message: err.message
        })
      }
    },

    //create new campaign
    createCampaign: (req, res) => {
        try {
            const data = req.body

            const campaign = new Campaign(data)
            campaign.save()

            res.json({
                message: "Campaign successfully created",
                data: campaign
            })
        } catch (error) {
            if (error.name == "NotFoundError") {
                res.status(404).json({
                  message: "Not Found Error"
                });
              }
              else if(error.name == "ValidationError") {
                res.status(400).json({
                  message: "Validation Error"
                });        
              }
              else {
                res.status(500).json({
                  message: "Server Error"
                });
              }     
        }
    },

    //update campaign
    updateCampaignById: async (req, res) => {
      const id = req.params.id
      const valid = mongoose.Types.ObjectId.isValid(id)
      const data = req.body
      try {
        if (!valid) {
          return res.status(404).send(`Campaign : ${id} not found`);
        }

        await Campaign.findByIdAndUpdate(id, data, { new: true });
        const new_campaign = await Campaign.findById(id);
        res.status(200).json({
          message: "Update Success",
          data: new_campaign,
        });
      } catch{
          res.status(500).json({
            message: "Server Error",
          });
      }
    },

    //delete campaign by id
    deleteCampaignById: async (req, res) => {
      const id = req.params.id
      const data = req.body

      if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Todo dengan id : ${id} tidak ditemukan`)
      }
  
      await Campaign.findByIdAndRemove(id)
      res.status(200).json({
        message: "Success"
      })
    }
}