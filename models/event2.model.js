const mongoose = require('mongoose');

const teamSchema = mongoose.Schema(
  {
    teamName: {
      type: String,
      unique: true,
    },
    teamLeaderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
    teamNumber: {
      type: Number,
    },
    leaderName: {
      type: String,
    },
    leaderEmail: {
      type: String,
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
      },
    ],
    teamCode: {
      type: String,
    }
  },
  { collection: 'Event2' }
);




module.exports = mongoose.model("Event2", teamSchema);
