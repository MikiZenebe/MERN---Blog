const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
app.use(express.json()); //Pasrse a json from request
app.use(express.urlencoded({ extended: true }));

//Connect to Database
mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(4000, () => {
    console.log(`Database connected on port ${4000}`);
  });
});
