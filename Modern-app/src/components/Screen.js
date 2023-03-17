import { Typography } from "@mui/material";
import { useState } from "react";
import ChatBot, { Loading } from "react-simple-chatbot";
import { useCallback } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ThemeProvider } from "styled-components";
import Nav from "./Nav";
import "../App.css";

let condition;

const Screen = () => {
  condition = window.innerHeight === 600 && window.innerWidth === 1024;

  const [state, setState] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const [disabled, setDisabled] = useState(false);

  //Next Step FN
  const CustomStep = ({ triggerNextStep }) => {
    const [disabled, setDisabled] = useState(false);
    return (
      <Button
        disabled={disabled}
        variant="info"
        onClick={() => {
          setDisabled(true);
          handleShow();
          triggerNextStep({ trigger: "hello-world" });
        }}
      >
        <p style={{ margin: 0 }}>{!disabled ? "View response" : "Received"}</p>
      </Button>
    );
  };

  const [vals, setVals] = useState([
    {
      id: "hello-world",
      delay: 2000,
      message:
        "Submit a prompt below to generate a response. Remember, be descriptive! 🤖",
      trigger: "2",
    },

    {
      id: "2",
      user: true,

      validator: (value) => {
        if (Number(value)) {
          return "Only text can be submitted";
        }
        if (value === "") {
          return "Cannot submit empty body";
        }
        setDisabled(false);
        setState(false);
        console.log(value);
        handleRes(value);
        return true;
      },

      trigger: "3",
    },
    {
      id: "3",
      message: "Generating...",
      trigger: "4",
    },
    {
      id: "4",
      asMessage: true,
      waitAction: true,
      component: <CustomStep />,
      delay: 5000,
    },
  ]);

  const handleRes = useCallback(async (value) => {
    await fetch("https://mobot-beta.herokuapp.com/backend", {
      method: "POST",
      body: JSON.stringify({
        title: `req`,
        model:
          window.localStorage.getItem("Model") !== null
            ? window.localStorage.getItem("Model")
            : "gpt-3.5-turbo",
        body: `${value}`,
        temperature: Number(`${window.localStorage.getItem("temperature")}`),
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) =>
      response.json().then((data) => {
        console.log(data.data);
        setState(data.data);
      })
    );
  }, []);

  const theme = {
    background: "brown",
    fontFamily: "Roboto",
    headerBgColor: "#f0f0f0",
    headerFontColor: "#f0f0f0",
    headerFontSize: "15px",
    botBubbleColor: "#d3d3d3",
    botFontColor: "black",
    userBubbleColor: "#1982FC",
    userFontColor: "white",
  };

  console.log(window.innerWidth);

  return (
    <>
      <Nav />
      <ThemeProvider theme={theme}>
        <ChatBot
          placeholder={"Enter prompt"}
          hideHeader={true}
          recognitionEnable={
            navigator.platform === "iPhone" || navigator.platform === "iPad"
              ? false
              : true
          }
          cacheName={"rsc_cache"}
          style={{
            backgroundColor: "rgba(12,20,44, 0.5)",
            borderRadius: "0px",
          }}
          steps={vals}
        />
      </ThemeProvider>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Typography variant="h3" className="response">
              Response
            </Typography>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            color: "white",
            backgroundColor: "#101D30",
            maxHeight: "65vh",
            overflowY: "scroll",
            fontFamily: "roboto",
          }}
        >
          <p style={{ color: !state && "#54B4D3" }}>
            {state ? state : "Generating..."}
          </p>
        </Modal.Body>

        <Modal.Footer style={{ display: "flex", justifyContent: "center" }}>
          <center>
            <Button
              disabled={!state ? true : disabled}
              style={{
                display: "flex",
                justifySelf: "center",
                fontFamily: "roboto",
              }}
              variant="info"
              onClick={() => {
                navigator?.clipboard.writeText(state);
                setDisabled(true);
                alert("Copied to clipboard");
              }}
            >
              Copy to clipboard
            </Button>
          </center>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Screen;
