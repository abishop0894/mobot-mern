import LinearProgress from "@mui/joy/LinearProgress";
import { Box, Typography } from "@mui/material";
import AdSense from "react-adsense";
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
    </Box>
  );
};

export default Loading;
