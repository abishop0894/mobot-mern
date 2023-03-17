const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 4000;
const { Configuration, OpenAIApi } = require("openai");
app.use(express.static(path.resolve(__dirname, "./Modern-app/build")));
app.use(bodyParser.json());
app.use(cors());

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});
const openai = new OpenAIApi(configuration);
// input data
let aiRes;

const history = [];
const messages = [];
for (const [input_text, completion_text] of history) {
  messages.push({ role: "user", content: input_text });
  messages.push({ role: "assistant", content: completion_text });
}

app.post("/backend", async (request, response) => {
  console.log(request.body.body);
  console.log(request.body.temperature);

  try {
    aiRes = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      message: messages,
      max_tokens: 700,
      temperature: Number(`${request.body.temperature}`),
    });
    history.push([request.body.body, aiRes.data.choices[0].text]);

    console.log(aiRes.data.choices[0].text);
    response.status(200).json({
      success: true,
      data: aiRes.data.choices[0].text,
    });
  } catch (err) {
    return response.status(400).json({
      success: false,
      error: err.response
        ? err.response.data
        : "There was an issue processing this command.",
    });
  }
});

app.listen(PORT, () => console.log(`running on ${PORT}`));
