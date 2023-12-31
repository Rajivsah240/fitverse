import React, { useContext, useState } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import Logo from "../assets/111.svg";

import {AuthContext} from "../AuthContext";


const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname==="/signup";
  const isAboutpage = location.pathname === "/about";
  const navigate = useNavigate();
  const {loggedIn,handleLogout}=useContext(AuthContext);
  return (
    <Stack
    className={`navbar ${isAboutpage ? 'about-nav' : ''}`}

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
        className="nav-links"
        direction="row"
        gap="40px"
        fontFamily="'Geologica', cursive"
        alignItems="center"
        fontSize={'62.5%'}
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
      {loggedIn ?
      (
        <Stack direction="row" gap="30px" height="40px">
        <Button className="log-sign-btn"
          sx={{
            color: "black",
            bgcolor: "white",
            textTransform: "none",
            width: "100px",
            borderRadius: "15px"
          }}
          onClick={handleLogout}
        >
          LOG OUT
        </Button>
        <Button className="log-sign-btn" 
          sx={{
            color: "black",
            bgcolor: "white",
            textTransform: "none",
            width: "80px",
            borderRadius: "10px"
          }}
          onClick={() => navigate("/")}
        >
          Welcome
        </Button>
      </Stack>
      ):
      (<Stack direction="row" gap="30px" height="40px">
        <Button className="log-sign-btn"
          sx={{
            color: "black",
            bgcolor: "white",
            textTransform: "none",
            width: "80px",
            borderRadius: "15px"
          }}
          onClick={() => navigate("/login")}
        >
          LOG IN
        </Button>
        <Button className="log-sign-btn" 
          sx={{
            color: "black",
            bgcolor: "white",
            textTransform: "none",
            width: "80px",
            borderRadius: "15px"
          }}
          onClick={() => navigate("/signup")}
        >
          SIGN UP
        </Button>
      </Stack>)}
    </Stack>
  );
};

export default Navbar;