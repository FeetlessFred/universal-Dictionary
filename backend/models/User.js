const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  bio: { type: String, default: "" },
  avatar: { type: String, default: "" }
});

module.exports = mongoose.model("User", UserSchema);
