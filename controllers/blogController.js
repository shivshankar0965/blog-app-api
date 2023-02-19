const { BlogModel } = require("../models/blog.model");

const getAllBlogs = async (req, res) => {
  try {
    let blogs = await BlogModel.find({ user: req.body.user });
    res.send(blogs);
  } catch (err) {
    res.send({ message: "can't get the blog", error: err });
  }
};

const addBlog = async (req, res) => {
  const payload = req.body;
  try {
    const blog = new BlogModel(payload);
    await blog.save();
    res.send({ message: "blog created successfull" });
  } catch (err) {
    res.send({ message: "can't create the blog" });
  }
};
const getSingleBlog = async (req, res) => {
  const ID = req.params.id;
  try {
    const blog = await BlogModel.find({ _id: ID });
    res.send(blog);
  } catch (err) {
    res.send({ message: "can't get the single blog" });
  }
};

const updateBlog = async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    await BlogModel.findByIdAndUpdate({ _id: ID }, payload);
    res.send({ message: "Blog has been updated successfully" });
  } catch (err) {
    res.send({ message: "can't update the blog", error: err });
  }
};
const deleteBlog = async (req, res) => {
  const ID = req.params.id;

  try {
    await BlogModel.findByIdAndDelete({ _id: ID });
    res.send({ message: `Blog with id ${ID} has been deleted successfully` });
  } catch (err) {
    res.send({ message: "can't delete the blog", error: err });
  }
};

module.exports = {
  getAllBlogs,
  addBlog,
  getSingleBlog,
  deleteBlog,
  updateBlog,
};
