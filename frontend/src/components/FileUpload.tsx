import axios from "axios";
import { useState } from "react";

export default function FileUpload() {
  const [fileUpload, setFileUpload] = useState<File | null>(null);
  const [summary, setSummary] = useState<string | null>(null);
  const [insights, setInsights] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFileUpload(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!fileUpload) {
      console.log("Please upload file");
      return;
    }

    const formData = new FormData();
    formData.append("document", fileUpload);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/summarize/upload",
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      );

      setSummary(response.data.summary);
      setInsights(response.data.insights);
    } catch (error) {
      console.log("Error in document upload", error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md space-y-4">
      <input
        type="file"
        onChange={handleFileChange}
        className="block w-full p-2 border rounded"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Upload & Summarize
      </button>
      {summary && (
        <div className="mt-4 p-4 border rounded">
          <h3 className="text-lg font-bold">Summary:</h3>
          <p>{summary}</p>
          <h4 className="mt-2 font-bold">Insights:</h4>
          <ul className="list-disc pl-4">
            {insights.map((insight, index) => (
              <li key={index}>{insight}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
