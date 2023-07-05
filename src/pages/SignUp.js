import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import axios from "axios";
import pic from "../assets/body.jpg";

const defaultTheme = createTheme();

export default function SignUp() {
  const [signUpMessage, setSignUpMessage] = useState("");
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/signup",
        formData
      );
      console.log("User created successfully");
      setSignUpMessage("User Account Created Successfully");
      // Perform any additional actions or redirect the user
      let timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      setTimeout(() => {
        clearInterval(timer);
        navigate("/login");
      }, 10000);
    } catch (error) {
      if (error.response && error.response.data.error) {
        setSignUpMessage(error.response.data.error);
      } else {
        setSignUpMessage("Something went wrong");
      }
      console.error(error);
      // Handle network errors or display an error message
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Grid container component="main" height={"100vh"}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: `url(${pic})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        component={Paper}
        elevation={6}
        square
        sx={{
          background: "linear-gradient(0deg, #010B1B 10.9%,#102661 97.1%)",
        }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4" color={"white"}>
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 1, width: "70%" }}
          >
            <TextField
              sx={{
                input: {
                  color: "white",
                  border: "1px solid",
                  borderRadius: "4px",
                },
              }}
              margin="normal"
              required
              fullWidth
              id="name"
              placeholder="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              sx={{
                input: {
                  color: "white",
                  border: "1px solid",
                  borderRadius: "4px",
                },
              }}
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              sx={{
                input: {
                  color: "white",
                  border: "1px solid",
                  borderRadius: "4px",
                },
              }}
              margin="normal"
              required
              fullWidth
              id="phone"
              placeholder="Mobile Number"
              name="phone"
              autoComplete="phone"
              autoFocus
              value={formData.phone}
              onChange={handleChange}
            />
            <TextField
              sx={{
                input: {
                  color: "white",
                  border: "1px solid",
                  borderRadius: "4px",
                },
              }}
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: "45px" }}
            >
              Sign Up
            </Button>
            {signUpMessage && (
              <p
                className={`message ${
                  signUpMessage
                    ? signUpMessage === "User Account Created Successfully"
                      ? "success"
                      : "error"
                    : ""
                }`}
              >
                {signUpMessage}
              </p>
            )}
            {signUpMessage === "User Account Created Successfully" &&
              countdown > 0 && (
                <p className="countdown-timer">
                  Redirecting in <span className="timer">{countdown}</span>{" "}
                  seconds to LOG IN...
                </p>
              )}
          </Box>
        </Box>
      </Grid>
      <style>
        {`
        .message{
          /*SignUp message*/
          padding: 8px;
          text-align: center;
          font-size: 17px;
          line-height: 30px;
          font-weight: 700;
          margin: 0 auto;
          width: 300px;
          max-width: calc(100vw - 48px);
          transform-origin: center bottom;
          transition: all 150ms ease-in-out 0s;
          border-radius: 12px;
          transform: translate3d(0px, 0px, 0px) scale(1);
          opacity: 1;
          }
          .success{
            color: rgb(0, 104, 74);
            border: 1px solid rgb(192, 250, 230);
            box-shadow: rgba(6, 22, 30, 0.2) 0px 18px 18px -15px;
            background-color: rgb(227, 252, 247);
          }
          
          .error{
            color: rgb(104, 0, 0);
            border: 1px solid rgb(250, 192, 192);
            box-shadow: rgba(30, 18, 6, 0.2) 0px 18px 18px -15px;
            background-color: rgb(252, 227, 227);
          }
          
          
          /*Countdown Timer*/
          .countdown-timer{
            margin: 0 auto;
            text-align: center;
            color: #ffffff;
            letter-spacing: 0.05in;
          }
          .timer{
            font-size: 25px;
            font-weight: 800;
            color: #7450a0;
            letter-spacing: normal;
          }
          `}
      </style>
    </Grid>
  );
}
