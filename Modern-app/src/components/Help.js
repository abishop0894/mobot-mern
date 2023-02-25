import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState, useContext } from "react";
import { AppContext } from "../App";
import Fade from "react-bootstrap/Fade";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Stack, Card, Table, Paper, Slider, Divider } from "@mui/material";

import "../App.css";

const Help = () => {
  const { modal, setModal } = useContext(AppContext);
  const smDevices = window.innerWidth < 900;
  const HandleChange = (e) => {
    e.preventDefault();
    window.localStorage.setItem("temperature", e.target.value);
    console.log(window.localStorage.getItem("temperature"));
  };

  const generalContent = [
    {
      title: "What is moBot",
      content: (
        <>
          moBot is an AI chatbot using
          <a href="https://en.wikipedia.org/wiki/GPT-3">
            {" "}
            the GPT-3 language model
          </a>
          . AI (Artificial Intelligence) is a branch of computer science that
          focuses on creating intelligent machines that can think and act like
          humans. AI is used to create computer programs that can solve complex
          problems, recognize patterns, and make decisions with minimal human
          intervention. AI is used in a variety of applications, including
          robotics, natural language processing, computer vision, and machine
          learning. Chatbots are computer programs that use AI to simulate human
          conversation. They are designed to understand natural language and
          respond to user input in a meaningful way. Chatbots use a variety of
          techniques to understand user input, including natural language
          processing, machine learning, and pattern recognition. Chatbots use a
          combination of AI techniques to understand user input and generate a
          response. First, the chatbot will analyze the user’s input to
          determine the intent of the user. This is done using natural language
          processing techniques such as part-of-speech tagging, sentiment
          analysis, and entity extraction. Once the intent is determined, the
          chatbot will use machine learning algorithms to generate a response.
          The response is generated by searching a database of pre-defined
          responses or by generating a response based on the user’s input.
          Finally, the chatbot will use pattern recognition techniques to
          determine if the user’s input matches a known pattern. If so, the
          chatbot will respond with a pre-defined response.
        </>
      ),
    },
    {
      title: "What can moBot do",
      content: `GPT-3 (Generative Pre-trained Transformer 3), moBot's underlying
                technology, is a powerful language model developed by OpenAI.
                It’s the largest and most powerful language model ever created,
                with 175 billion parameters. GPT-3 is a deep learning model that
                uses natural language processing (NLP) to generate human-like
                text. It’s trained on a massive dataset of text from the
                internet, and can generate text that’s indistinguishable from
                human-written text. GPT-3 can be used to generate text for a
                variety of tasks, such as summarizing articles, writing blogs,
                and generating code. It can also be used to explain difficult
                concepts, such as complex code blocks. GPT-3 can generate text
                that is both accurate and coherent, making it a powerful tool
                for writing documents. Essentially, GPT-3 can be used to
                explain/generate virtually anything if provided a sufficient
                input.`,
    },
    {
      title: "How to submit a prompt",
      content: ` When submitting a prompt, it's important to provide as much
                context as possible. This will help the AI generate more
                accurate and precise responses. Additionally, it's important to
                provide a clear and concise prompt. AI is a powerful tool, but
                it's not a mind reader. If you provide a vague or confusing
                prompt, the AI won't be able to generate a meaningful response.
                It's also important to consider the length of your prompt. AI's
                designed to generate long-form responses, so it's best to
                provide a prompt that's at least a few sentences long. This will
                help the AI generate more detailed and accurate responses.
                Finally, it's important to consider the tone of your prompt. AI
                is capable of generating responses in a variety of tones, so
                it's important to provide a prompt that's in line with the tone
                you're looking for.`,
    },
  ];

  const promptContent = [
    {
      title: "NLP tasks",
      listItems: [
        "Text generation",
        "Summarization",
        "Open domain question answering",
        "Sentiment analysis (useful for financial markets)",
        "Paraphrasing",
        "Text to table",
        "Language translation",
        "Token classification",
        "Essay outline",
      ],
    },
    {
      title: "Code",
      listItems: [
        "Code generation",
        "Code explanation",
        "Time complexity calculation",
        "Natural language to SQL translation",
        "Natural language to code translation",
        "Code to natural language translation",
        "Programming language conversion",
        "Data object conversions (JSON, XML, CSV etc.)",
        "Knowledge graph generation",
        "HTML to txt",
      ],
    },
    {
      title: "Structured output",
      listItems: [
        "List",
        "Numbered list",
        "Headings and subheadings",
        "Tables",
      ],
    },
    {
      title: "Unstructured output",
      listItems: [
        "Narrative modes (1st, 2nd or in the 3rd person)",
        "Formal",
        "Informal",
        "Personas",
        "Custom text manipulation",
      ],
    },
    {
      title: "Media types",
      listItems: [
        "Write social media posts",
        "Write blogs",
        "Write emails",
        "Write poems",
        "Write songs",
        "Write resumes/cover letters",
      ],
    },
    {
      title: "GPT-3 self queries",
      listItems: [
        "Ask GPT-3 about it's own capabilities",
        "Correct GPT-3 on it's knowledge",
      ],
    },
    {
      title: "Expert prompting",
      listItems: ["Prompt GPT-3 with simultaneous conditions"],
    },
  ];

  const ipad = window.innerWidth > 600 && window.innerWidth < 900;

  return (
    <Modal
      show={modal === "Help" ? true : false}
      fullscreen={true}
      onHide={() => setModal("")}
    >
      <Modal.Header
        closeButton
        style={{
          paddingLeft: "2vw",
        }}
      >
        <Modal.Title>
          <Typography
            sx={{
              marginLeft: ".5vw",
            }}
            className="help"
            variant="h3"
          >
            Help
          </Typography>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          color: "white",
          backgroundColor: "#101D30",
          fontFamily: "roboto",
          paddingTop: "5vh",
        }}
      >
        <center>
          <Typography variant="h3" sx={{ marginBottom: "5vh" }}>
            General
          </Typography>
          {generalContent.map((item) => (
            <Accordion
              sx={{
                width: "70vw",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b>{item.title}</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    maxHeight: "30vh",
                    overflowY: "scroll",
                    textAlign: "left",
                    fontWeight: "600 !important",
                  }}
                  textAlign={"left"}
                >
                  {item.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}

          <Typography
            sx={{ marginTop: "5vh", marginBottom: "5vh" }}
            variant="h3"
          >
            Use Cases
          </Typography>
          {promptContent.map((item) => (
            <Accordion
              sx={{
                width: "70vw",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b>{item.title}</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    maxHeight: "30vh",
                    overflowY: "scroll",
                    fontWeight: "600 !important",
                  }}
                  textAlign={"left"}
                >
                  <ul>
                    {item.listItems.map((key) => (
                      <li key={item.listItems[key]}>{key}</li>
                    ))}
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}

          <Typography variant="h3" marginTop={"5vh"} marginBottom={"5vh"}>
            Settings
          </Typography>
          <Stack justifyContent={"center"}>
            <center>
              <Typography variant="h6">Temperature</Typography>
            </center>
            <center>
              <Slider
                sx={{
                  color: "white",
                  width: "70vw",
                  marginTop: "5vh",
                }}
                aria-label="Small steps"
                defaultValue={
                  window.localStorage.getItem("temperature")
                    ? window.localStorage.getItem("temperature")
                    : 0
                }
                step={0.1}
                marks
                min={0.0}
                max={1.0}
                valueLabelDisplay="auto"
                onChange={HandleChange}
                size="Large"
              />
            </center>

            <Box
              display={"flex"}
              justifyContent={"center"}
              marginBottom={"5vh"}
              marginTop={"2vh"}
              sx={{
                marginLeft: !smDevices ? "13vw" : ipad ? "6.5vw" : "5.5vw",
                paddingRight: smDevices && "2.3vw",
                paddingLeft: ipad && "4vw",
                width: "70vw",
              }}
            >
              <Typography
                sx={{
                  marginRight: ipad && "-7vw",
                }}
                variant="p"
                fontSize={"small"}
                textAlign={"center"}
              >
                Temperature is a parameter that controls the amount of
                randomness in the output of the model. It's a single digit
                decimal, ranging from 0.0 to 1.0.{" "}
                <span style={{ color: "#54B4D3" }}>
                  Higher temperatures allow for more creativity in the output
                </span>
                , as the model is more likely to explore more diverse and
                unexpected options. At higher temperatures, the model is more
                likely to generate more creative and interesting outputs, but
                it's also more likely to generate nonsensical or incorrect
                outputs. The default is 0.
              </Typography>
            </Box>
          </Stack>

          <Divider
            sx={{
              marginTop: "3vh",
              backgroundColor: "white",
              width: window.innerWidth < 600 ? "81vw" : "70vw",
            }}
          />
          <a href="https://www.instagram.com/modernistic.io/?hl=en">
            <img
              style={{
                marginTop: "2vh",
                marginBottom: "1vh",
              }}
              src="https://cdn.discordapp.com/attachments/980168318151450717/1076561170439348365/LOGO-03_1_30.png"
              alt=""
            />
          </a>
        </center>
      </Modal.Body>
    </Modal>
  );
};

export default Help;
