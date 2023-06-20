import React, {useRef} from 'react';
import { Link as ScrollLink } from "react-scroll";
import { Stack, Button, Typography } from "@mui/material";
import backgroundImage from '../assets/gym_img2.jpg';
import { Model } from './Anatomy.jsx'; // Import the Model component
import { Canvas } from '@react-three/fiber';

const Header = () => {
  const modelContainerRef = useRef(null);
  return (
    <Stack
      className="bckg-img"
      style={{
        position: "relative", // Set the position to relative
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Add the 3D model */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "20%",
          transform: "translate(-50%, -50%)",
          width: "50%",
          height: "60%",
          zIndex: 1, // Set a higher z-index to place it above the background image
        }}
      >
        <Canvas>
        <ambientLight intensity={0.1} /> {/* Adjust the intensity of the ambient light */}
        <pointLight position={[5, 10, 5]} intensity={0.95} /> {/* Adjust the position and intensity of the point light */}
          <Model
                position={[0, 1, 0]}
                scale={[30, 30, 30]}
                rotation={[0, 1, 0]}
                ref={modelContainerRef}
              />
        </Canvas>
      </div>

      <div className="background-box" style={{zIndex: 2}}>
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
