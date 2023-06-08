import AboutUs from "./pages/AboutUs";
import Posts from "./pages/Posts";
import WelcomePage from "./pages/WelcomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';


function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" Component={WelcomePage} />
            <Route path="/about" Component={AboutUs} />
            <Route path="/posts" Component={Posts} />
        </Routes>
    </Router>
  );
}

export default App;
