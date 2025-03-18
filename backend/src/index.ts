import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import summarizeRoutes from "./routes/SummarizeRoutes";
import connectDB from "./db";

const app = express();

app.use(express.json());
app.use(cors());
app.use(fileUpload());
const PORT = process.env.PORT || 5000;

app.use("/api/summarize", summarizeRoutes);
connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
