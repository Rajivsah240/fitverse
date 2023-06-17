import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Stack, Button, Typography } from "@mui/material";
import backgroundImage from '../assets/backImg2.jpg';
import Logo from "../assets/fit4.png";

const Navbar = () => {
  const location = useLocation();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const handleMouseEnter = () => {
    setIsNavbarVisible(true);
  };

  const handleMouseLeave = () => {
    setIsNavbarVisible(true);
  };

  return (
    <Stack
      className="navbar"
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        opacity: isNavbarVisible ? 1 : 0,
        height: isNavbarVisible ? "94px":"5px",
        transition: "opacity 0.1s ease-in-out",
        background: "#000", // Set the background color to black
      }}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "150px", height: "50px", margin: "0px", marginTop: "10px" }}
        />
      </Link>

      <Stack
        direction="row"
        gap="40px"
        fontFamily="'Geologica', cursive"
        alignItems="center"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#ffff",
          }}
          className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          HOME
        </Link>
        <Link
          to="/search-exercise"
          style={{
            textDecoration: "none",
            color: "#ffff",
          }}
          className={`navbar-link ${location.pathname === '/search-exercise' ? 'active' : ''}`}
        >
          SEARCH EXERCISE
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "#ffff" }} className="navbar-link">
          ABOUT
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "#ffff" }} className="navbar-link">
          CONTACT
        </Link>
      </Stack>

      <Stack direction="row" gap="30px" height="40px">
        <Button className="log-sign-btn"
          sx={{
            color: "#000",
            bgcolor: "#fff",
            textTransform: "none",
            width: "80px",
            borderRadius: "20px"
          }}
        >
          LOG IN
        </Button>
        <Button className="log-sign-btn"
          sx={{
            color: "#000",
            bgcolor: "#fff",
            textTransform: "none",
            width: "80px",
            borderRadius: "20px"
          }}
        >
          SIGN UP
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;