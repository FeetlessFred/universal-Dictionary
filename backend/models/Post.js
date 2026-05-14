const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  userId: String,
  username: String,
  image: String,
  caption: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Post", PostSchema);
