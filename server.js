const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

app.post('/api/gemini', async (req, res) => {
  try {
      const { prompt } = req.body;

          const respuesta = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
                method: "POST",
                      headers: {
                              "Content-Type": "application/json"
                                    },
                                          body: JSON.stringify({
                                                  contents: [{
                                                            parts: [{ text: prompt }]
                                                                    }]
                                                                          })
                                                                              });

                                                                                  const datos = await respuesta.json();
                                                                                      res.json(datos);
                                                                                        } catch (error) {
                                                                                            res.status(500).json({ error: error.message });
                                                                                              }
                                                                                              });

                                                                                              app.listen(3000, () => {
                                                                                                console.log("Servidor en funcionamiento");
                                                                                                });
                                                                                                
