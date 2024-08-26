const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

function startChatGPT() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.interimResults = true;

    recognition.addEventListener('result', async (e) => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: transcript,
            max_tokens: 150,
        });

        document.getElementById('chatgpt-response').textContent = response.data.choices[0].text;
    });

    recognition.start();
}