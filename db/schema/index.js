import mongoose from "mongoose";

export const dataSchema = new mongoose.Schema(
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
    siteName: {
      type: String,
    },
  },
  { timestamps: true }
);

