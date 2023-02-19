const mongoose = require("mongoose");

const userScema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
});

const UserModel = mongoose.model("user", userScema);

module.exports = {
  UserModel,
};
