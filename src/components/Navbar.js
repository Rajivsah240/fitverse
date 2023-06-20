import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import Logo from "../assets/111.svg";

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
      }}
    >
      <Link to="/" >
        <img
          src={Logo}
          alt="logo"
          style={{ width: "150px", height: "50px", margin: "0px" }}
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
            color: "white",
            bgcolor: "rgb(131, 137, 194)",
            textTransform: "none",
            width: "80px",
            borderRadius: "20px"
          }}
        >
          LOG IN
        </Button>
        <Button className="log-sign-btn"
          sx={{
            color: "white",
            bgcolor: "rgb(131, 137, 194)",
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