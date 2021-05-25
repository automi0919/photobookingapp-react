const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: "firstName is required"
    },
    lastName: {
      type: String,
      trim: true,
      // required: "lastName is required"
    },
    email: {
      type: String,
      trim: true,
      required: "email is required"
    },
    businessName: {
      type: String,
      trim: true
    },
    password: {
      type: String,
      required: true
    }
  });

const User = mongoose.model("User", userSchema);

module.exports = User;
