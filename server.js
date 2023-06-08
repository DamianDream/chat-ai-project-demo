const OpenAI = require('openai')
const { Configuration, OpenAIApi } = OpenAI;
require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3005;

const configuration = new Configuration({
    organization: process.env.ORG,
    apiKey: process.env.API_KEY,
})
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post('/',  async (req, res) => {
    const { message } = req.body;
    console.log(message);

    // Below sample to use with another chat-gpt assistant

    // const response = await openai.createCompletion({
    //     model: "text-davinci-003",
    //     prompt: message,
    //     max_tokens: 100,
    //     temperature: 0,
    // })

    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{
            role: "user",
            content: message
        }]
    })

    console.log(response)
    if (response.data.choices[0].message.content) {
        res.json({message: response.data.choices[0].message.content})
    }
})

app.listen(port, () => {
    console.log('OpenAI app listening');
});