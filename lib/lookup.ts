import mongoose from "mongoose";

const lookSchema = new mongoose.Schema({
  userId: { type: String, required: false },
  status: { type: Boolean, default: true },
  phoneNumber: { type: String, required: true },
  timeStamp: { type: Date, default: Date.now },
});

export const Look =
  mongoose.models.Look || mongoose.model("Look", lookSchema);