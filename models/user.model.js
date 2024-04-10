const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    name: {
      type: String,
    },
    regNo: {
      type: String,
    },
    mobNo: {
      type: Number,
    },
    event1TeamRole: {
      type: Number, // 0 for leader, 1 for member
    },
    event1TeamId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event1",
    },
    event2TeamRole: {
      type: Number, // 0 for leader, 1 for member
    },
    event2TeamId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event2",
    },
    hasFilledDetails: {
      type: Boolean,
      default: false,
    },
    events: {
      type: Array,
      default: [],
    },
    event1Consent: {
      type: Boolean,
      default: false,
      ref: "Event1",
    },
    event2Consent: {
      type: Boolean,
      default: false,
      ref: "Event2",
    },
  },
  { collection: "Users" }
);



  module.exports = mongoose.model("Users", userSchema);