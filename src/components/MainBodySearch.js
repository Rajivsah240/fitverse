import React, { useState } from 'react';
import { Stack, Box } from '@mui/material';
import man from '../assets/man.png';

const ClickableArea = ({ top, left, onClick}) => {
  return (
    <div
      className="clickable-area"
      style={{
        position: 'absolute',
        top,
        left,
        transform: 'translate(-50%, -50%)',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor:"rgba(255, 0, 0, 0.5)",
        cursor: 'pointer',
      }}
      onClick={onClick}
    />
  );
};

const MainBodySearch = () => {
  const [result, setResult] = useState('CLICK THE BUTTON TO SEE THE MAGIC!!!');

  const handleClickArea1 = () => {
    setResult('Hi!!!');
  };
  const handleClickArea2 = () => {
    setResult('Hello!!!');
  };

  return (
    <Stack className="body-search-box" flexDirection="row">
      <Box className="search-man-box" style={{ position: 'relative' }}>
        <img src={man} className="man-img" alt="Man" />
        <ClickableArea
          top="40%"
          left="60%"
          onClick={handleClickArea1}          
        />
        <ClickableArea
          top="40%"
          left="45%"
          onClick={handleClickArea2}          
        />
      </Box>
      <Box className="result-box" fontSize="30px" color="HighlightText">
        {result}
      </Box>
    </Stack>
  );
};

export default MainBodySearch;
