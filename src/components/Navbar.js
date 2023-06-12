import React from "react";
import { Link } from "react-router-dom";
import { Stack, Button, Typography } from "@mui/material";
import backgroundImage from '../assets/backImg2.jpg';
import Logo from "../assets/Frame 2.svg";
import { ClassNames } from "@emotion/react";

const Navbar = () => (
  <div className="bckg-img" style={{backgroundImage: `url(${backgroundImage})`,
  }}>
  <Stack
  
    direction="row"
    justifyContent="space-between"
    margin="0px 100px"
    alignItems={"center"}
    
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: "200px", height: "56px", margin: "30px 0px" }}
      />
    </Link>

    <Stack
      direction="row"
      gap="40px"
      fontFamily="'Geologica', cursive"
      //fontSize="24px"
      alignItems="center"
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#FF2625",
          borderBottom: "3px solid red",
          
        }}
      >
        HOME
      </Link>
      <Link to="/" style={{ textDecoration: "none", color: "#FF2625" }}>
        ABOUT
      </Link>
      <Link to="/" style={{ textDecoration: "none", color: "#FF2625" }}>
        CONTACT
      </Link>
    </Stack>

    <Stack direction="row" gap="30px" height="40px">
      <Button
        sx={{
          bgcolor: "#FF2625",
          color: "#fff",
          textTransform: "none",
          width: "80px",
          borderRadius:"20px"
        }}
      >
        LOG IN
      </Button>
      <Button
        sx={{
          bgcolor: "#73447A",
          color: "#fff",
          textTransform: "none",
          width: "80px",
          borderRadius:"20px"
        }}
      >
        SIGN UP
      </Button>
    </Stack>
  </Stack>
  <Stack
  marginLeft={"100px"}
  marginTop={"100px"}>
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
      display: "flex",
      alignItems: "center",
      letterSpacing: "0.13em",
      textTransform: "uppercase",
      background:
        "linear-gradient(90deg, #F07808 9.23%, rgba(242, 11, 11, 0) 59.33%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      textFillColor: "transparent",//background:"linear-gradient(90deg, rgba(235,143,35,1) 41%, rgba(255,255,255,1) 100%)"
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
      display: "flex",
      alignItems: "center",
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
      display: "flex",
      alignItems: "center",
      letterSpacing: "0.13em",
      textTransform: "uppercase",
      color: "#EB8F23",
    }}
  >
    <span style={{ color: "#d4cb13",paddingRight:"10px"}}>Inner</span>
    <span style={{background:
        "linear-gradient(90deg, #F07808 3.23%, rgba(242, 11, 11, 0) 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      textFillColor: "transparent"}}> Fire</span>
  </Typography>
  <Button sx={{
          //ml:"20px",
          mt:"20px",
          fontSize:"18px",
          bgcolor: "#73447A",
          color: "#fff",
          textTransform: "none",
          width: "210px",
          borderRadius: "20px"
        }}>Let's Get Started</Button>
  </Stack>
</div>
);

export default Navbar;
