const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campaignSchema = new Schema({
    user: ObjectId,
    title: {
        type: String,
        required: [true, "Title not provided"]
    },
    description: {
        type: String,
        required: [true, "Description not provided"]
    },
    image: {
        type: String,
        required: [true, "Image not provided"]

    },
    category: {
        type: string,
        enum: ['pendidikan', 'kesehatan', 'modal'],
        required: [true, "Category not provided"]
    },
    status: {
        type: string,
        enum: ['belum terverifikasi', 'terverifikasi', 'ditolak'],
        default: "belum terverifikasi"
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