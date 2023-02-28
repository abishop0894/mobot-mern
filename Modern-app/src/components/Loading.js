import LinearProgress from "@mui/joy/LinearProgress";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import "../App.css";

const Loading = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

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
      <LinearProgress
        variant="soft"
        determinate={false}
        sx={{
          color: "white",
        }}
      />
      <ins
        style={{
          position: "fixed",
          bottom: "0",
        }}
        className="adsbygoogle"
        data-ad-client="ca-pub-3880313689633200"
        data-ad-slot="3430907106"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </Box>
  );
};

export default Loading;
