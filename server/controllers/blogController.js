const blog = require("express").Router();
const Blog = require("../models/Blog");
const verifyToken = require("../middlewares/verifyToken");

//Get all posts
blog.get("/allPosts", async (req, res) => {
  try {
    const blogs = await Blog.find({}).populate("userId", "-password");
    return res.status(200).json(blogs);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//Get a single blog
blog.get("/post/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate(
      "userId",
      "-password"
    );
    blog.views += 1;
    await blog.save();

    return res.status(200).json(blog);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//Get featured blogs
blog.get("/featured", async (req, res) => {
  try {
    const blogs = await Blog.find({ featured: true })
      .populate("userId", "-password")
      .limit(3);

    return res.status(200).json(blogs);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//Create a blog
blog.post("/newPost", verifyToken, async (req, res) => {
  try {
    const blog = await Blog.create({ ...req.body, userId: req.user.id });
    return res.status(200).json(blog);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//Update a blog
blog.put("/updatePost/:id", verifyToken, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog.userId.toString() !== req.user.id) {
      throw new Error("You can update only your own posts");
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ).populate("userId", "-password");

    return res.status(200).json(updatedBlog);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//Like a blog
blog.put("/likePost/:id", verifyToken, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog.likes.includes(req.user.id)) {
      blog.likes = blog.likes.filter((userId) => userId !== req.user.id);
      await blog.save();

      return res.status(200).json({ msg: "Successfully unliked the blog" });
    } else {
      blog.likes.push(req.user.id);
      await blog.save();

      return res.status(200).json({ msg: "Successfully liked the blog" });
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

//Delete the blog
blog.delete("/deletePost/:id", verifyToken, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog.userId.toString() !== req.user.id) {
      throw new Error("You can delete only your own posts");
    }
    await Blog.findByIdAndDelete(req.params.id);

    return res.status(200).json({ msg: "Successfully deleted the blog" });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = blog;
