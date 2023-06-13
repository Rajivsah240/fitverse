import React from 'react';
import {Route,Routes,useLocation} from 'react-router-dom';
import {Box} from '@mui/material';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import SearchExercises from './pages/SearchExercises';

function App() {
  return (
    <Box> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search-exercise" element={<SearchExercises/>}/>
      </Routes>
    </Box>
  );
}


// const HomeWithTransition = () => {
//   const location = useLocation();

//   return (
//     <TransitionGroup>
//       <CSSTransition key={location.key} classNames="fade" timeout={300}>
//         <Box className="page">
//           <Routes><Route path="/" element={<Home/>} /></Routes>
//         </Box>
//       </CSSTransition>
//     </TransitionGroup>
//   );
// };

export default App;

