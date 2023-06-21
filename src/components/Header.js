import React, {useRef} from 'react';
import { Link as ScrollLink } from "react-scroll";
import { Stack, Button, Typography } from "@mui/material";
import backgroundImage from '../assets/view.jpg';
import { Model1 } from './Anatomy.jsx'; // Import the Model component

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
          top: "45%",
          left: "18%",
          transform: "translate(-50%, -70%)",
          width: "50%",
          height: "100%",
          zIndex: 1, // Set a higher z-index to place it above the background image
        }}
      >
        <Canvas>
        <ambientLight intensity={0.04} /> {/* Adjust the intensity of the ambient light */}
        <pointLight position={[25, 100, 5]} intensity={0.99} /> {/* Adjust the position and intensity of the point light */}
          <Model1
                position={[0, 0, 0]}
                scale={[28, 30, 30]}
                rotation={[0, 1, 0]}
                ref={modelContainerRef}
              />
        </Canvas>
      </div>

      <div className="background-box" style={{zIndex: 2}}>
        <Typography
          variant="h4"
          sx={{
            ml: "70px",
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
          Reach
        </Typography>
        {/* <Typography
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
          { With }
        </Typography> */}
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
          <span style={{ color: "#FFFFFF", paddingRight: "10px" }}>Stellar</span>
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
            Fitness
          </span>
        </Typography>
        <ScrollLink to="body" smooth={true} duration={500}>
          <Button
            className="start-btn"
            sx={{
              //ml:"20px",
              mt: "20px",
              fontSize: "18px",
              bgcolor: "white",
              color: "#000",
              textTransform: "none",
              width: "210px",
              borderRadius: "20px",
            }}
          >
            Let's Take off
          </Button>
        </ScrollLink>
      </div>
    </Stack>
  );
};

export default Header;
