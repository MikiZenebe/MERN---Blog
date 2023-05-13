const auth = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Signup
auth.post("/register", async (req, res) => {
  try {
    //Check if user is already signed up
    const isExist = await User.findOne({ email: req.body.email });
    if (isExist) {
      throw new Error("Already such an account. Try a diffrent email");
    }

    //Register user with hashed password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    const { password, ...others } = newUser._doc;
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "5h",
    });

    return res.status(200).json({ newUser, token });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

//Login
auth.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw new Error("Invalid Credentials");
    }

    //Compare user's password with input one
    const comparePass = await bcrypt.compare(req.body.password, user.password);
    if (!comparePass) {
      throw new Error("Invalid Credentials");
    }

    const { password, ...others } = user._doc;
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "5h",
    });

    return res.status(200).json({ others, token });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

module.exports = auth;
