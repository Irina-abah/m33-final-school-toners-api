require('dotenv').config();

const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3005;
const app = express();
const allRoutes = require("./routes/index");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(allRoutes);

app.get("/", (req, res) => {
  res.json({message: "Welcome to Abah's final project"})
})

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
}); 