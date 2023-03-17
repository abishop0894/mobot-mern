import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ListItem, ListItemButton } from "@mui/material";
import { motion } from "framer-motion";
import { AppContext } from "../App";
import { useContext } from "react";
import Help from "./Help";
import "../App.css";
import Terms from "./Terms";

let ipad;
let smLap;

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: -1 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Nav = () => {
  ipad = window.innerWidth === 820 && window.innerHeight === 1180;
  const condition = window.innerHeight === 600 && window.innerWidth === 1024;
  const [show, setShow] = useState(false);
  const HandleClose = () => setShow(false);
  const { modal, setModal } = useContext(AppContext);

  //hide fn
  const hide = setTimeout((e) => {
    e.preventDefault();
    setShow(false);
  }, 300);

  //menu fns & state
  const HandleHelp = () => {
    hide();
    setModal("Help");
  };

  const HandleTerms = () => {
    hide();
    setModal("Terms");
  };

  const HandleClear = () => {
    hide();
    window.confirm("Are you sure? This action is irreversible.") &&
      window.location.reload();
    window.localStorage.removeItem("rsc_cache");
    window.localStorage.removeItem("returnUser");
    window.localStorage.clear();
  };

  const HandleDonation = () => {
    window.location.assign("https://www.buymeacoffee.com/mobotai");
  };

  const menuItems = ["Help", "Terms", "Clear cache", "Buy me a coffee"];
  const menuFns = [HandleHelp, HandleTerms, HandleClear, HandleDonation];

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: show && "white !important",
        }}
        className="nav"
      >
        <Toolbar
          className="toolbar"
          sx={{
            backgroundColor: show && "white",
            paddingBottom: condition && "2vh",
          }}
        >
          <Typography
            className="logo"
            variant="h3"
            color={show ? "black" : "white"}
            sx={{
              textShadow: ".8px .8px lightgrey",
            }}
          >
            moBot.
          </Typography>
          <Hamburger
            size={42}
            color={show ? "black" : "white"}
            toggle={() => setShow(!show)}
            toggled={show}
          />{" "}
        </Toolbar>{" "}
      </AppBar>
      <Offcanvas
        backdrop={false}
        style={{
          display: "flex",
          alignItems: "center",
          width: "102vw",
          marginTop: "8.2vh",
          maxWidth: "102vw",
        }}
        show={show}
        onHide={HandleClose}
      >
        <Offcanvas.Body className="menu">
          <motion.List
            initial={{ opacity: -1, y: -10 }}
            animate={{ opacity: 1, y: 3 }}
            transition={{ ease: "easeIn", duration: 0.6 }}
          >
            {menuItems.map((items) => {
              return (
                <>
                  <ListItem key={menuItems.indexOf(items)}>
                    <ListItemButton
                      onClick={menuFns[menuItems.indexOf(items)]}
                      divider={true}
                    >
                      <Typography className="menuItem" variant="h3">
                        {items}
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                </>
              );
            })}
          </motion.List>
          <center>
            <motion.div
              initial={{ opacity: -1, y: 5 }}
              animate={{ opacity: 1, y: -5 }}
              transition={{ ease: "easeIn", duration: 0.9 }}
              style={{
                position: "relative",
                bottom: "-4vh",
              }}
            >
              <p
                style={{
                  fontFamily: "roboto",
                  color: "gray",
                }}
              >
                Powered By
              </p>
              <a href="https://www.instagram.com/modernistic.io/?hl=en">
                <img
                  width={127.5}
                  height={73.5}
                  src="https://cdn.discordapp.com/attachments/980168318151450717/1076217131240280106/LOGO-01.png"
                  alt=""
                />
              </a>
              <p
                style={{
                  fontFamily: "roboto",
                  color: "gray",
                }}
              >
                © 2023 MTG
              </p>
            </motion.div>
          </center>
        </Offcanvas.Body>
      </Offcanvas>
      <Help />
      <Terms />
    </>
  );
};

export default Nav;
