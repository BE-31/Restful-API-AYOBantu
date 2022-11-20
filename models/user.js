const mongoose = require("mongoose");
const { Schema } = mongoose

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  national_id: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  isDisability: {
    type: Boolean,
    required: true,
  },
  typeOfDisability: {
    type: String,
  },
  organization: {
    type: String,
  },
  proofs: ObjectId,
  helpNeeded: {
    type: Text,
    reqiured: true
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User", userSchema);
