const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password:{
      type: String,
      required: true,
  },
  token:{
      type: String,
      required: true,
  },
  tokenTimer:{
      type: Float64Array,
      required: false,
  },
  driver:{
      type: Boolean,
      required: true,
  },
  userId:{
      type: Int32Array,
      required: true,
  }
});
module.exports = mongoose.model("User", UserSchema);