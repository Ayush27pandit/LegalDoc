import mongoose from "mongoose";

const SummarySchema = new mongoose.Schema({
  filename: { type: String, unique: true },
  text: { type: String },
  summary: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const Summary = mongoose.model("Summary", SummarySchema);
