const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

const app = express();
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("PrepPilot Backend Running 🚀");
});
app.post("/explain", async (req, res) => {

    try {

        const { problem } = req.body;

       const prompt = `
You are PrepPilot AI, an expert DSA mentor helping beginners.

Explain the following LeetCode problem in beginner-friendly language.

IMPORTANT RULES:

- Return the response ONLY in Markdown.
- Do NOT write any code.
- Keep it under 250 words.
- Use proper Markdown headings.
- Use bullet points where appropriate.
- Keep the explanation simple and interview-focused.

Use this exact format:

# 🎯 Goal

Explain what the problem is asking.

# 💡 Intuition

Explain the main idea behind solving it.

# ⚠️ Constraints

- Mention the important constraints.
- Explain why they matter.

# 🚀 Hint

Give ONE small hint without revealing the solution.

Problem:

${problem}
`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        res.json({
            explanation: response.text,
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: "Something went wrong",
        });

    }

});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
