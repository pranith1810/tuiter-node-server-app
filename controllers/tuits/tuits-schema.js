import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    tuit: String,
    likes: Number,
    liked: Boolean,
    username: String,
    handle: String,
    image: String,
    time: String,
    replies: Number,
    retuits: Number,
    likes: Number,
    topic: String,
    dislikes: Number,
    disliked: Boolean,
  },
  { collection: "tuits" }
);
export default schema;
