import React from 'react';
import {Route,Routes} from 'react-router-dom';

import './App.css';
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import SearchExercises from './pages/SearchExercises';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { AuthProvider } from './AuthContext';


function App() {
  return (
    <AuthProvider> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search-exercise" element={<SearchExercises/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </AuthProvider>
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

