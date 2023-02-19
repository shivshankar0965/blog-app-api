const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const blogs = require("./routes/blog.routes");
const users = require("./routes/user.routes");
const { authenticate } = require("./middlewares/authenticate.middleware");
app.use(cors());
app.use("/users", users);
app.use(authenticate);
app.use("/blogs", blogs);
module.exports = app;