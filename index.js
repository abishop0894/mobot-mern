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

app.post("/backend", async (request, response) => {
  console.log(request.body.body);
  console.log(request.body.temperature);

  try {
    aiRes = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: request.body.body }],
      max_tokens: 700,
      temperature: Number(`${request.body.temperature}`),
    });

    console.log(aiRes.data.choices[0].message.content);
    response.status(200).json({
      success: true,
      data: aiRes.data.choices[0].message.content,
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
