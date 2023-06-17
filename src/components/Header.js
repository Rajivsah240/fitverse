import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Stack, Button, Typography } from "@mui/material";
import backgroundImage from '../assets/gym_img2.jpg';

const Header = () => {
  return (
    <Stack
      className="bckg-img"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Set the height to full viewport height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden", // Hide the content outside the stack
      }}
    >
      <div className="background-box">
        <Typography
          variant="h4"
          sx={{
            //ml: "20px",
            mt: "20px",
            width: "512px",
            height: "86px",
            fontFamily: "'Viga', sans-serif",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "64px",
            lineHeight: "86px",
            //   display: "flex",
            //   alignItems: "center",
            letterSpacing: "0.13em",
            textTransform: "uppercase",
            background:
              "linear-gradient(90deg, #FFFFFF 9.23%, rgba(242, 11, 11, 0) 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            //background:"linear-gradient(90deg, rgba(235,143,35,1) 41%, rgba(255,255,255,1) 100%)"
          }}
        >
          Ignite
        </Typography>
        <Typography
          variant="h4"
          sx={{
            //ml: "20px",
            fontFamily: "'Viga', sans-serif",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "64px",
            lineHeight: "86px",
            //   display: "flex",
            //   alignItems: "center",
            letterSpacing: "0.13em",
            textTransform: "uppercase",
            color: "#FFFFFF",
          }}
        >
          Your
        </Typography>
        <Typography
          variant="h4"
          sx={{
            //ml: "20px",
            fontFamily: "'Viga', sans-serif",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "64px",
            lineHeight: "86px",
            //   display: "flex",
            //   alignItems: "center",
            letterSpacing: "0.13em",
            textTransform: "uppercase",
            color: "#EB8F23",
          }}
        >
          <span style={{ color: "#FFFFFF", paddingRight: "10px" }}>Inner</span>
          <span
            style={{
              background:
                "linear-gradient(90deg, #FFFFFF 3.23%, rgba(242, 11, 11, 0) 150%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            {" "}
            Fire
          </span>
        </Typography>
        <ScrollLink to="body" smooth={true} duration={500}>
          <Button
            className="start-btn"
            sx={{
              //ml:"20px",
              mt: "20px",
              fontSize: "18px",
              bgcolor: "rgb(131, 137, 194)",
              color: "#fff",
              textTransform: "none",
              width: "210px",
              borderRadius: "20px",
            }}
          >
            Let's Get Started
          </Button>
        </ScrollLink>
      </div>
    </Stack>
  );
};

export default Header;
