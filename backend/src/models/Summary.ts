import mongoose from "mongoose";

const SummarySchema = new mongoose.Schema({
  filename: { type: String },
  fieId: { type: String, unique: true },
  summary: { type: String },
  insights: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
});

export const Summary = mongoose.model("Summary", SummarySchema);
