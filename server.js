const app = require("./app");
const dotenv = require("dotenv");
const { connectionDatabase } = require("./config/database");
// config
dotenv.config({ path: "config/config.env" });
// connecting to database
connectionDatabase();
app.listen(process.env.PORT, () => {
  console.log(
    `server is started working on http://localhost:${process.env.PORT}`
  );
});
