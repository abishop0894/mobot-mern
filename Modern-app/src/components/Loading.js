import LinearProgress from "@mui/joy/LinearProgress";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import cloudEffect from "../assets/loading.svg";
import "../App.css";

const Loading = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100vw"
      height="100vh"
      maxHeight={"100vh"}
      overflow={"hidden"}
      sx={{
        backgroundImage:
          "linear-gradient(120deg, rgba(#e0c3fc, 0.75) 0%, rgba(#8ec5fc, 0.75) 100%);",
      }}
    >
      <center>
        <Typography
          marginBottom="-30vh"
          marginTop="40vh"
          color="white"
          variant="h3"
          className="logoLoading"
          sx={{
            textShadow: ".8px .8px lightgrey",
          }}
        >
          moBot.
        </Typography>
      </center>

      <img
        style={{
          position: "fixed",
          bottom: "10vh",
        }}
        src={cloudEffect}
        alt=""
      />
      <Box
        sx={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          height: "10vh",
          backgroundColor: "white",
        }}
      ></Box>
    </Box>
  );
};

export default Loading;
