import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

import { StarBorder } from "@mui/icons-material";

import ico1 from "../assets/about-icon-1.png";
import ico2 from "../assets/about-icon-2.png";
import ico3 from "../assets/about-icon-3.png";

const About = () => {
  return (
    <div className="about-container-main">
      <Stack className="about-bckg-img">
        <div className="about-border"></div>
      </Stack>

      <Stack color={"white"} className="about-body">
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontWeight: 800,
            fontFamily: "Rajdhani",
            textTransform: "uppercase",
          }}
        >
          About Us
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            textAlign: "center",
            fontWeight: 600,
            fontFamily: "Rajdhani",
            paddingTop: "50px",
            paddingLeft: "20%",
            paddingRight: "20%",
          }}
        >
          Fitverse is a web application that helps you track your fitness
          journey, set goals, and stay motivated. Whether you're a beginner or
          an experienced fitness enthusiast, Fitverse provides the tools you
          need to achieve your fitness goals.
        </Typography>
        <Stack
          mt={"50px"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <img style={{ width: "150px" }} src={ico1} />
          <img style={{ width: "150px" }} src={ico2} />
          <img style={{ width: "150px" }} src={ico3} />
        </Stack>

        <Stack mt={"100px"} alignItems={"center"} paddingBottom={'100px'}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Our Key Features
          </Typography>
          <List component={"ol"}>
            <ListItem component="li">
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="User registration and authentication"></ListItemText>
            </ListItem>
            <ListItem component="li">
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Personalized dashboard to track fitness progress"></ListItemText>
            </ListItem>
            <ListItem component="li">
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              
              <ListItemText
                primary="Goal setting and progress tracking
"
              ></ListItemText>
            </ListItem>
            <ListItem component="li">
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon><ListItemText primary="Exercise library with instructional videos and descriptions"></ListItemText>
            </ListItem>
            <ListItem component="li">
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Workout planner and scheduler"></ListItemText>
            </ListItem>
          </List>
        </Stack>
      </Stack>
    </div>
  );
};

export default About;
