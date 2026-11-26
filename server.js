const express = require('express');
const app = express();
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

app.post('/api/gemini', async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({contents: [{parts: [{text: prompt}]}]})
    });
    const data = await response.json();
    res.json(data);
  } catch(err) {
    res.status(500).json({error: err.message});
  }
});

app.listen(3000, () => {
  console.log("Servidor corriendo");
});
