import { Request, Response } from "express";
import axios from "axios";
import pdfParse from "pdf-parse";
import dotenv from "dotenv";
dotenv.config();

export const summarizeDocument = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    if (!req.files || !req.files.document) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const file = req.files.document as any;
    const dataBuffer = file.data;
    const parsedData = await pdfParse(dataBuffer);
    const extractedText = parsedData.text;

    // AI Call
    const geminiResponse = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent
?key=${process.env.GEMINI_API}`,
      {
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `Summarize the following legal document and extract the most important insights separately:

                Document:
                """
                ${extractedText}
                """

                Response format (strict JSON):
                {
                  "summary": "<Brief summary of the document>",
                  "insights": ["Key insight 1", "Key insight 2", "Key insight 3"]
                }`,
              },
            ],
          },
        ],
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    // Extract response correctly

    const responseText =
      geminiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
    const cleanedResponse = responseText.replace(/^```json|```$/g, "").trim();

    console.log("Cleaned AI Response:", cleanedResponse);
    try {
      const { summary, insights } = JSON.parse(cleanedResponse);
      res.status(200).json({ summary, insights });
    } catch (jsonError) {
      console.error("Error parsing Gemini response:", jsonError);
      res.status(500).json({ message: "Error processing AI response" });
    }
  } catch (error) {
    console.error("Error in SummarizeController:", error);
    res
      .status(500)
      .json({ message: "Internal server error in SummarizeController" });
  }
};
