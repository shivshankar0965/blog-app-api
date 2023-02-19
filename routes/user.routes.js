const express = require("express");
const {
  getAllUsers,
  addUser,
  deleteUser,
  updateUser,
  loginUser,
} = require("../controllers/userController");
const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/login").post(loginUser);
router.route("/signup").post(addUser);
router.route("/delete/:id").delete(deleteUser);
router.route("/update/:id").patch(updateUser);
module.exports = router;
