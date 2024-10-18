import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 20,
  },
  author: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 15,
  },
  genre: {
    type: String,
    required: true,
  },
});

export default new mongoose.model("Book", bookSchema);
