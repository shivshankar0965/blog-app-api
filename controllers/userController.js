const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { UserModel } = require("../models/user.models");
dotenv.config({ path: "config/config.env" });

const getAllUsers = async (req, res) => {
  const query = req.query;
  try {
    let user = await UserModel.find(query);
    res.send(user);
  } catch (err) {
    res.send({ message: "can't get the users" });
  }
};
const addUser = async (req, res) => {
  const { name, email, password, age } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.send({
          message: "something went wrong can't register the user",
          error: err.message,
        });
      } else {
        let user = new UserModel({ name, email, password: hash, age });
        await user.save();
        res.send({ message: "User has been added successfull" });
      }
    });
  } catch (err) {
    res.send({ message: "can't add user", error: err });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });

    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          let token = jwt.sign({ userID: user[0]._id }, process.env.key);
          res.send({ msg: "user Login successfull", token: token });
        } else {
          res.send({ message: "wrong credential 1" });
        }
      });
    } else {
      res.send({ message: "wrong credential 2" });
    }
  } catch (err) {
    res.send({ message: "can't login the user", error: err.message });
  }
};
const deleteUser = async (req, res) => {
  const ID = req.params.id;
  try {
    await UserModel.findByIdAndDelete({ _id: ID });
    res.send({ message: `user with id ${ID} has been deleted successfull` });
  } catch (err) {
    res.send({ message: "can't delete the user" });
  }
};
const updateUser = async (req, res) => {
  const payload = req.body;
  const ID = req.params.id;
  try {
    await UserModel.findByIdAndUpdate({ _id: ID }, payload);
    res.send({
      message: `user with id ${ID} has been updated successfull`,
    });
  } catch (err) {
    res.send({ message: `user can't updated`, error: err });
  }
};

module.exports = {
  getAllUsers,
  addUser,
  deleteUser,
  updateUser,
  loginUser,
};
