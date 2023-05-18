const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const multer = require("multer");
const paths = require("path");

dotenv.config();
app.use(express.json()); //Pasrse a json from request
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/images", express.static(paths.join(__dirname, "/images")));

//Connect to Database
mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(4000, () => {
    console.log(`Database connected on port ${4000}`);
  });
});

//Image Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

//Routes
const authRouter = require("./routes/auth");
app.use("/auth", authRouter);

const userRouter = require("./routes/users");
app.use("/user", userRouter);

const postRouter = require("./routes/post");
app.use("/posts", postRouter);

const catRouter = require("./routes/categories");
app.use("/categories", catRouter);
