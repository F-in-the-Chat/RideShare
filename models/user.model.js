const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
var jwtSecret = "F1n7hEcH47";

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  driver: {
    type: Boolean,
    default: false,
  },
  token: {
    type: String,
     required: false,
  },
  tokenTimer: {
    type: Number,
    required: false,
  },
  rides:{
    type: Array,
    required:false,
    default:[],
  },
  //   userId:{
  //       type: Number,
  //       required: true
  //   }
});

// Password Hashing
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = bcryptjs.hashSync(this.password, 10);
  }
  next();
});

// User Verification - Generate Tokens
UserSchema.methods.generateToken = async function () {
  try {
    let generatedToken = jwt.sign({ _id: this._id }, jwtSecret);
    this.token = generatedToken
    await this.save();
    return generatedToken;
  } catch (err) {
    console.log(error);
  }
};
module.exports = mongoose.model("User", UserSchema);
