import React, { useState, useEffect } from 'react';
import AboutUs from "./pages/AboutUs";
import ArtistSetup from './pages/ArtistSetup';
import Hub from "./pages/Hub";
import LogIn from "./pages/LogIn";
import Navbar from "./pages/Navbar";
import SignUp from "./pages/SignUp";
import WelcomePage from "./pages/WelcomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './styles.css';


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    

    useEffect(() => {    
        // Check if token exists in localStorage
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

  return (
    <div className="min-h-screen">
        <Navbar isAuthenticated={isAuthenticated} />
        <Router>
            <Routes>
                <Route path="/" Component={WelcomePage} />
                <Route path="/about" Component={AboutUs} />
                <Route path="/signup" Component={SignUp} />
                <Route path="/login" Component={LogIn} />
                <Route path="/hub" Component={Hub} />
                <Route path="/artist_setup" Component={ArtistSetup} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
