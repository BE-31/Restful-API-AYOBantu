const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title not provided"]
    },
    content: {
        type: String,
        required: [true, "Content not provided"]
    },
    summary : {
        type: String,
        required: [true, "Summary not provided"]
    },
    image: {
        type: String,
        required: [true, "Image not provided"]

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
const Article = mongoose.model("Article", articleSchema);

//export
module.exports = Article