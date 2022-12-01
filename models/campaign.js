const { ObjectID, ObjectId } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campaignSchema = new Schema({
    user: {
        type: mongoose.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: [true, "Title not provided"]
    },
    address: {
        type: String,
        required: [true, "Address needed not provided"]
    },
    description: {
        type: String,
        required: [true, "Description not provided"]
    },
    image: {
        type: String,
        required: [true, "Image not provided"]
    },
    supportingFile1: {
        type: String,
        required: [true, "Supporting File not provided"]
    },
    supportingFile2: {
        type: String,
        required: [true, "Supporting File not provided"]
    },
    category: {
        type: String,
        enum: ['pendidikan', 'kesehatan', 'modal'],
        required: [true, "Category not provided"]
    },
    status: {
        type: String,
        enum: ['belum terverifikasi', 'terverifikasi', 'ditolak'],
        default: "belum terverifikasi"
    },
    keterangan: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    }
})

//creating model
const Campaign = mongoose.model("Campaign", campaignSchema);

//export
module.exports = Campaign