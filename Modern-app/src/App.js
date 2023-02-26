import Nav from "./components/Nav";
import { Box, Typography } from "@mui/material";
import Screen from "./components/Screen";
import { motion } from "framer-motion";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { createContext } from "react";
import Loading from "./components/Loading";
import iosShare from "./assets/iosShare.svg";
import droidShare from "./assets/droidShare.svg";
import "./App.css";
export const AppContext = createContext();
function App() {
  //Input
  const [input, setInput] = useState(false);

  //state for ai (default text-davinci to be added to context)
  //connect to radio elmt in nav.js
  const [ai, setAi] = useState("text-davinci-003");
  //state

  //Temperature State

  //load state
  const [loading, setLoading] = useState(true);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  //menu state
  const [containerMotion, setContainerMotion] = useState(container);
  const [itemMotion, setItemMotion] = useState(item);
  const [modal, setModal] = useState("");

  //Mobile reminder state
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //load screen logic
  setTimeout(() => {
    setLoading(false);
  }, 3500);

  //hide state for app content while loading (Ads)
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 4500);
  }, []);

  const HandleReturnMobileUser = (e) => {
    e.preventDefault();
    window.localStorage.setItem("returnUser", true);
    setShow(false);
  };
  const sm = window.innerWidth < 900 ? true : false;
  const installed = window.localStorage.getItem("returnUser");

  const display = [<Screen />, <Nav />];
  return loading ? (
    <Loading />
  ) : (
    <Box>
      <AppContext.Provider
        value={{
          input,
          setInput,
          ai,
          setAi,
          containerMotion,
          setContainerMotion,
          itemMotion,
          setItemMotion,
          modal,
          setModal,
        }}
      >
        <motion.div
          className="body"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {display.map((element) => (
            <motion.div key={display.indexOf(element)} variants={item}>
              {element}
            </motion.div>
          ))}
        </motion.div>
      </AppContext.Provider>
      <Modal
        show={!sm ? false : installed ? false : show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>
            <Typography className="install" variant="h4">
              Install moBot
            </Typography>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "#101D30",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "roboto",
            }}
            variant={"p"}
          >
            For the ideal user experience, we highly recommend adding moBot to
            your home screen. Tap the '
            <span style={{ color: "#54B4D3" }}>
              <b>Share</b>
            </span>
            ' ( <img src={iosShare} alt="" /> or <img src={droidShare} alt="" />{" "}
            ) icon and select '
            <span style={{ color: "#54B4D3" }}>
              <b>Add to Home Screen</b>
            </span>
            ' to get started.
          </Typography>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Got it
          </Button>
          <Button variant="info" onClick={HandleReturnMobileUser}>
            I'm on the app
          </Button>
        </Modal.Footer>
      </Modal>
    </Box>
  );
}

export default App;
