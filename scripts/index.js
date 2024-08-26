const express = require('express');
const { sendChatGPTResponse } = require('./api/chatgptApi');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Endpoint to handle ChatGPT API request
app.post('/chatgpt', async (req, res) => {
  try {
    const userInput = req.body.input;
    const response = await sendChatGPTResponse(userInput);
    res.json({ response });
  } catch (error) {
    res.status(500).send('Error processing the request.');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
