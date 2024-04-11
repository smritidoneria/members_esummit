const mongoose = require('mongoose');

const capacitySchema = mongoose.Schema(
  {
    event1: {
      type: Boolean,
      default: false,
    },
    event2: {
      type: Boolean,
      default: false,
    },
    event3: {
      type: Boolean,
      default: false,
    },
    event4: {
      type: Boolean,
      default: false,
    },
    event5: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "Capacity" }
);



module.exports = mongoose.model("Capacity", capacitySchema);