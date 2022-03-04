require('dotenv').config();

const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3002;
const sequelize = require("./utils/connection");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// sequelize();

app.get("/", (req, res) => {
  res.json({message: "Welcome to Abah's final project"})
})

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
}); 