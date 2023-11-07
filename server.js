const OpenAI = require('openai')
const { Configuration, OpenAIApi } = OpenAI;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3010;


const configuration = new Configuration({
    apiKey: "YOUR_API_KEY"
})

const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

let isKeyValid = false

app.post('/',  async (req, res) => {
    const { message } = req.body;
    console.log(message);

    // TODO: Below sample to use with another chat-gpt assistant
    // const response = await openai.createCompletion({
    //     model: "text-davinci-003",
    //     prompt: message,
    //     max_tokens: 100,
    //     temperature: 0,
    // })

    let response;

    if (!isKeyValid) {
        response = {
            data: {
                choices: [
                    { message: {
                            content: "Error! API should be updated"
                        }
                    }
                ]
            }
        }
    }

    if (isKeyValid) {
        response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: message
            }]
        })
    }

    console.log(response)
    if (response.data.choices[0].message.content) {
        res.json({message: response.data.choices[0].message.content})
    }
})

app.listen(port, () => {
    console.log('OpenAI app listening');
});