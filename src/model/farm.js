import mongoose from "mongoose";

const farmSchema = new mongoose.Schema(
  {
    farmId: {
      type: String,
      unique: true,
      required: true,
    },
    farmPhotos: {
      type: [String],
      required: true,
    },
    caption: String,
  },
  { timestamps: true }
);

export const Farm = mongoose.model("farm", farmSchema);
