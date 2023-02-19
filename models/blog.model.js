const mongoose = require("mongoose");

const blogScema = mongoose.Schema({
  title: String,
  body: String,
  user: String,
  time: { type: String, default: Date.now() },
});

const BlogModel = mongoose.model("blog", blogScema);

module.exports = {
  BlogModel,
};
