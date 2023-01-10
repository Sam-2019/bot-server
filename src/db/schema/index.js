const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    domain: {
      type: String,
    },
    imgURL: {
      type: String,
    },
    favicon: {
      type: String,
    },
    url: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = {
  dataSchema,
};