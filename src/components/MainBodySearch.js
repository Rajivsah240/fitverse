import React from "react";
import man from "../assets/man.png";
import { Stack,Box } from "@mui/material";

const MainBodySearch = () => {
  return(
  <Stack className="body-search-box" flexDirection={"row"}>
    <Box className="search-man-box"><img src={man} className="man-img"/></Box>
    <Box className="result-box">hello</Box>
  </Stack> 
  )
  
};

export default MainBodySearch;
