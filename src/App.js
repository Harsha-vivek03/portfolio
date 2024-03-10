
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
function App() {



  
  return (
    <Router>
    <div className='main' >
      
      
    <Routes>
        <Route path="/portfolio" element={<Home  name="Sirla Ganesh" /> } />
        <Route path="/portfolio/about" element={<About /> } />
        <Route path="/portfolio/projects" element={<Projects /> } />
        <Route path="/portfolio/contact" element={<Contact /> } />
      </Routes> 
      
    </div>
    </Router>
  );
}

export default App;
