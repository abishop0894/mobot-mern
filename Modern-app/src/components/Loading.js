import LinearProgress from "@mui/joy/LinearProgress";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import GoogleAd from "./GoogleAd";
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
          "linear-gradient(to right top, #ffbce3, #eeb7e7, #dab2ea, #c4afec, #abaceb, #98b2f2, #82b9f7, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
      }}
    >
      <center>
        <Typography
          marginTop="40vh"
          color="white"
          variant="h3"
          className="logoLoading"
          marginBottom="-30vh"
        >
          moBot.
        </Typography>
      </center>
      <LinearProgress
        variant="soft"
        determinate={false}
        sx={{
          color: "white",
        }}
      />
      <GoogleAd
        style={{
          width: "100%",
          height: "20vh",
        }}
        slot="9876543210"
        googleAdId="ca-pub-0123456789"
      />
    </Box>
  );
};

export default Loading;
