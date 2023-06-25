import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import Logo from "../assets/111.svg";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <Stack
      className="navbar"
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{background: isHomePage ? "black" : "linear-gradient(180deg, #010B1B, #102661 90%)"}}
    >
      <Link to="/" >
        <img
          src={Logo}
          alt="logo"
          style={{ width: "150px", height: "94px", margin: "0px", mixBlendMode: "screen", }}
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
        <Link
          to="/about"
          style={{
            textDecoration: "none",
            color: "#ffff",
          }}
          className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}>
          ABOUT
        </Link>
        <Link
          to="/contact"
          style={{
            textDecoration: "none",
            color: "#ffff",
          }}
          className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}>
          CONTACT
        </Link>
      </Stack>

      <Stack direction="row" gap="30px" height="40px">
        <Button className="log-sign-btn"
          sx={{
            color: "black",
            bgcolor: "white",
            textTransform: "none",
            width: "80px",
            borderRadius: "20px"
          }}
        >
          LOG IN
        </Button>
        <Button className="log-sign-btn"
          sx={{
            color: "black",
            bgcolor: "white",
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