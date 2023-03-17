import Modal from "react-bootstrap/Modal";
import { AppContext } from "../App";
import { useContext,  } from "react";
import { Typography, Divider } from "@mui/material";
import "../App.css";

const Terms = () => {
  const { modal, setModal } = useContext(AppContext);

  return (
    <Modal
      show={modal === "Terms" ? true : false}
      fullscreen={true}
      onHide={() => setModal("")}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <Typography className="questions" variant="h3">
            Terms
          </Typography>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          color: "white",
          backgroundColor: "#101D30",
          fontFamily: "roboto",
          fontSize: "large",
          width: "100%",
          paddingLeft: "15vw",
          paddingRight: "15vw",
          paddingTop: "5vh",
        }}
      >
        {" "}
        <Typography variant="p" textAlign={"left"}>
          <b>1. Introduction</b>
          <br />
          <br />
          moBot is an AI software owned by Modernistic Technology Group (“MTG”).
          By using moBot, you agree to be bound by these Terms of Use (“Terms”).
          <br />
          <br />
          <b>2. Use of moBot</b>
          <br />
          <br />
          You may use moBot for personal and commercial purposes. You may not
          use moBot for any illegal or unauthorized purpose. You may not use
          moBot to attempt to collect or store any data from GPT3 aside from
          generated responses.
          <br />
          <br />
          <b>3. Ownership</b>
          <br />
          <br />
          MTG owns all rights, title, and interest in and to moBot, including
          all intellectual property rights. You may not copy, modify, or create
          derivative works of moBot.
          <br />
          <br />
          <b>4. Disclaimer of Warranties</b>
          <br />
          <br />
          MTG does not guarantee that moBot will be error-free or uninterrupted.
          MTG disclaims all warranties, express or implied, including any
          warranties of merchantability, fitness for a particular purpose, or
          non-infringement.
          <br />
          <br />
          <b>5. Limitation of Liability</b>
          <br />
          <br />
          MTG shall not be liable for any damages, including direct, indirect,
          incidental, special, or consequential damages, arising out of or
          related to your use of moBot.
          <br />
          <br />
          <b>6. Changes to Terms</b>
          <br />
          <br />
          MTG reserves the right to modify these Terms at any time. If MTG makes
          a material change to these Terms, MTG will notify you by posting a
          notice on the moBot web application.
          <br />
          <br />
          <b>7. Governing Law</b>
          <br />
          <br />
          These Terms shall be governed by and construed in accordance with the
          laws of the State of California, without regard to its conflict of law
          provisions.
          <br />
          <br />
        </Typography>
        {/* create as footer component in future */}
        <center>
          <Divider
            sx={{
              marginTop: "3vh",
              backgroundColor: "white",
              width: window.innerWidth < 600 ? "70vw" : "100%",
            }}
          />
        </center>
        <center>
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

export default Terms;
