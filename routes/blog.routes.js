const express = require("express");
const {
  getAllBlogs,
  addBlog,
  getSingleBlog,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogController");
const router = express.Router();

router.route("/").get(getAllBlogs);
router.route("/create").post(addBlog);
router.route("/:id").get(getSingleBlog);
router.route("/delete/:id").delete(deleteBlog);
router.route("/update/:id").patch(updateBlog);
module.exports = router;
