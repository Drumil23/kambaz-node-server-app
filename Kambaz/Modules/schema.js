import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  _id: String,
  name: String,
  description: String,
  module: String,
}, { _id: false });

const schema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    description: String,
    course: { type: String, required: true, ref: "CourseModel" },
    lessons: [lessonSchema],
  },
  { collection: "modules" }
);

export default schema;