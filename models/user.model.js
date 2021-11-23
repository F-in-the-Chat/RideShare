const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password:{
      type: String,
      required: true
  },
  token:{
      type: String,
      required: true
  },
  tokenTimer:{
      type: Number,
      required: false
  },
  driver:{
      type: Boolean,
      default: false
  },
  userId:{
      type: Number,
      required: true
  }
});
module.exports = mongoose.model("User", UserSchema);