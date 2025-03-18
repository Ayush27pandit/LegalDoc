import express from "express";
import { summarizeDocument } from "../controllers/SummarizeController";

const router = express.Router();

router.post("/upload", summarizeDocument);

export default router;
