const { Schema, model } = require("mongoose");

const userModel = new Schema(
  {
    googleId: String,
  },
  { collection: "users" }
);
const User = model("users", userModel);
module.exports = User;
