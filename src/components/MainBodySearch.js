import React, { useState } from 'react';
import { Stack, Box } from '@mui/material';
import man from '../assets/man.png';

const ClickableArea = ({ top, left, onClick, active }) => {
  return (
    <div
      className={`clickable-area ${active ? 'active' : ''}`}
      style={{
        position: 'absolute',
        top,
        left,
        transform: 'translate(-50%, -50%)',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        cursor: 'pointer',
      }}
      onClick={onClick}
    />
  );
};

const MainBodySearch = () => {
  const [result, setResult] = useState('CLICK ANY BODY PART TO START');
  const [activeButton, setActiveButton] = useState(null);

  const handleClickArea1 = () => {
    setResult('Chest Exercises:\n\n- Push-ups: A classic exercise that targets the chest muscles, shoulders, and triceps.\n- Bench Press: An effective compound exercise for building upper body strength, particularly targeting the chest.\n\nInstructions:\n1. Lie on a flat bench with your feet flat on the floor.\n2. Grip the bar slightly wider than shoulder-width apart.\n3. Lower the bar towards your chest, then press it back up to the starting position.\n\nTips:\n- Keep your elbows slightly tucked in during the movement.\n- Use a spotter for heavier weights.\n- Focus on maintaining proper form throughout the exercise.');
    setActiveButton(1);
  };

  const handleClickArea2 = () => {
    setResult('Arm Exercises:\n\n- Bicep Curls: A basic exercise for targeting the bicep muscles, which helps in building arm strength and size.\n- Tricep Dips: An exercise that primarily targets the triceps, helping to tone and strengthen the back of the upper arms.\n\nInstructions:\n1. Stand straight with a dumbbell in each hand.\n2. Curl the dumbbells towards your shoulders while keeping your upper arms stationary.\n3. Lower the dumbbells back to the starting position.\n\nTips:\n- Keep your elbows close to your body throughout the movement.\n- Focus on squeezing your biceps at the top of the curl.\n- Avoid swinging or using momentum to lift the weights.');
    setActiveButton(2);
  };

  return (
    <>
      <div className="statement-container" id='body'>
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
            active={activeButton === 1}
          />
          <ClickableArea
            top="40%"
            left="35%"
            onClick={handleClickArea2}
            active={activeButton === 2}
          />
        </Box>
        <div className={`result-box ${activeButton ? 'active' : ''}`}>
          {result}
        </div>
      </Stack>
    </>
  );
};

export default MainBodySearch;
