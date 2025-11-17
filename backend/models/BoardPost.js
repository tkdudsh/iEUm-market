const mongoose = require("mongoose");

const boardPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  writer: { type: String, default: "익명" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("BoardPost", boardPostSchema);
