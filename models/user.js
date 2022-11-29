const { ObjectID, ObjectId } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    username: {
        type: String,
        unique: [true, "Username already taken"],
        lowercase: true,
        required: [true, "Username not provided"]
    },
    email: {
        type: String,
        unique: [true, "Email already taken"],
        lowercase: true,
        required: [true, "Email not provided"]
    },
    isVerified : {
        type: Boolean,
        default: false
    },
    password : {
        type: String,
        required: [true, "Password not provided"]
    },
    name: {
        type: String,
        required: [true, "Name not provided"]

    },
    national_id: {
        type: String,
        required: [true, "National ID not provided"]
    },
    dob: {
        type: Date,
        required: [true, "Date of birth not provided"]
    },
    contact: {
        type: String,
        required: [true, "Contact not provided"]
    },
    address: {
        type: String,
        required: [true, "Address not provided"]
    },
    isDisability: {
        type: Boolean,
        required: [true, "Pleas choose your disability status"]
    },
    typeOfDisability: {
        type: String,
    },
    organization: {
        type: String,
    },
    proofs: ObjectId,
    helpNeeded: {
        type: String,
        required: [true, "Please specify the help you needed not provided"]
    },
    emailToken: {
        type: String,
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
const User = mongoose.model("User", userSchema);

//export
module.exports = User