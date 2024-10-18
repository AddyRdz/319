import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 20,
  },
  rating: {
        type: Number,
    required: true,
  },
  comment: {
    type: String,
    minLength: 5,
    maxLength: 50,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

export default new mongoose.model("Review", reviewSchema);
