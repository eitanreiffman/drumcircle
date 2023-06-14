import AboutUs from "./pages/AboutUs";
import Posts from "./pages/Posts";
import SignUp from "./pages/SignUp";
import WelcomePage from "./pages/WelcomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';


function App() {
    
  return (
    <div className="min-h-screen bg-slate-300">
        <Router>
            <Routes>
                <Route path="/" Component={WelcomePage} />
                <Route path="/about" Component={AboutUs} />
                <Route path="/posts" Component={Posts} />
                <Route path="/signup" Component={SignUp} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
