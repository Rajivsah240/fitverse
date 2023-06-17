import React, { useState } from 'react';
import { Stack, Box } from '@mui/material';
import man from '../assets/man.png';
import backgroundImage from '../assets/gym_img7.jpg';

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
        backgroundColor:"rgba(255, 255, 255, 0.5)",
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
    <>
      <div
        className="statement-container"
        id='body'
        style={{
          background: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className="statement-heading">Unlock Your Fitness Journey</h2>
        <p className="statement-text">
          Embark on an interactive experience like no other. Explore our virtual
          human body and discover exercise details with a simple click. Get
          comprehensive instructions and expert tips to help you reach your fitness
          goals. Plus, unlock additional resources for training, nutrition, and
          lifestyle advice. Let our virtual body be your fitness companion on the
          path to a healthier, fitter you.
        </p>
      </div>

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
        <div className="result-box">
          {result}
        </div>
      </Stack>
    </>
  );
};

export default MainBodySearch;
