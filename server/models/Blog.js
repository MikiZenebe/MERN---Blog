const mongoose = require("mongoose");
const { Schema } = mongoose;

const BlogSchema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    desc: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    views: {
      type: Number,
      default: 0,
    },

    likes: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
