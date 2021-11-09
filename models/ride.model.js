const mongoose = require("mongoose");

const RideSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  pickup: {
    type: String,
    required: true,
  },
  dropoff: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  preferences: {
    type: String,
    required: true,
  },
  //   creator: {
  //     type: Schema.Types.ObjectId,
  //     ref: "User",
  //   },
});
module.exports = mongoose.model("Ride", RideSchema);
