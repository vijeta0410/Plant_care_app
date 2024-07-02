import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/Authpage';
import HomePage from './pages/HomePage';
import Recommendation from './pages/Recommendation';
import MyPlants from './pages/MyPlants';
import Products from './pages/Products';
import Discussions from './pages/Discussions';
// import ChatBot from './pages/Chatbot';
import ChatPage from './pages/ChatPage';
import NavBar from './components/Navbar';
import Motivation from './pages/Motivation';

const ConditionalNavBar = () => {
  const location = useLocation();
  const excludedPaths = ['/', '/auth'];
  return !excludedPaths.includes(location.pathname) ? <NavBar /> : null;
};

function App() {
  return (
    <Router>
      <ConditionalNavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/recommendations" element={<Recommendation />} />
        <Route path="/my-plants" element={<MyPlants />} />
        <Route path="/products" element={<Products />} />
        <Route path="/community" element={<Discussions />} />
        <Route path="/chatbot" element={<ChatPage />} />
        <Route path="/motivation" element={<Motivation />} />
      </Routes>
    </Router>
  );
}

export default App;
