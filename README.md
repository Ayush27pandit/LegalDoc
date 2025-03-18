# 📜 Legal Document Summarizer AI

A full-stack AI-powered web application that summarizes legal documents using **React (TypeScript), TailwindCSS, Express, MongoDB, and Gemini AI**. Users can upload PDFs, and the system extracts key insights and generates a concise summary.

## 🚀 Features
- 📄 Upload legal documents (PDF)
- 🧠 AI-based summarization using **Gemini AI**
- 🔍 Extract key insights from legal text
- 🏛️ Store and retrieve summaries in **MongoDB**
- 🖥️ Fully responsive **React + Tailwind** frontend

---

## 📂 Project Structure
```
legal-doc-summarizer/
│── backend/                   # Express Backend
│   ├── models/                # Mongoose models
│   ├── routes/                # Express routes
│   ├── controllers/           # Business logic
│   ├── utils/                 # Helper functions (PDF parsing, AI calls)
│   ├── server.ts              # Main Express server
│── frontend/                  # React Frontend
│   ├── src/
│   │   ├── components/        # Reusable UI Components
│   │   ├── pages/             # Main pages
│   │   ├── api/               # API calls (Axios)
│   │   ├── App.tsx            # Main entry point
│   │   ├── index.tsx          # React DOM Render
│── .env                       # Environment Variables
│── package.json               # Dependencies
```

---

## 🛠️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Ayush27pandit/LegalDoc.git
cd legal-doc-summarizer
```

### 2️⃣ Backend Setup
```sh
cd backend
npm install
```
Create a `.env` file in `backend/` and add:
```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
GEMINI_API=your_gemini_ai_key
```
Run the backend server:
```sh
npm run dev
```

### 3️⃣ Frontend Setup
```sh
cd frontend
npm install
npm run dev
```

---

## 📝 Usage
### API Testing via Postman
- **Endpoint:** `POST http://localhost:5000/api/summarize/upload`
- **Body (form-data):**
  - **Key:** `document` (Type: File)
  - **Value:** Select a **PDF file**
- **Expected Response:**
```json
{
  "summary": "This legal document outlines the contractual capacity of minors...",
  "insights": [
      "Contracts made by minors are generally voidable at the minor's option...",
      "The definition of 'necessaries' is context-dependent..."
  ]
}
```

### Uploading a PDF in UI
1. Open `http://localhost:5173`
2. Click "Choose File" and select a **PDF**
3. Click **Upload & Summarize**
4. View **Summary & Insights**

---

## 🎨 Technologies Used
- **Frontend:** React (TypeScript), TailwindCSS, Axios
- **Backend:** Express, MongoDB, Mongoose, Multer (File Upload)
- **AI:** Gemini API
- **Database:** MongoDB (optional Pinecone Vector DB)

---

## 🤝 Contributing
1. **Fork** the repository
2. **Clone** the forked repo: `git clone https://github.com/Ayush27pandit/LegalDoc.git`
3. Create a **new branch**: `git checkout -b feature-branch`
4. **Commit** your changes: `git commit -m 'Added new feature'`
5. **Push** the branch: `git push origin feature-branch`
6. Open a **Pull Request**

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🌟 Show Your Support
Give this project a ⭐ if you found it useful!

