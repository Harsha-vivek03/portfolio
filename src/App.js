
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
function App() {



  
  return (
    <Router basename="/portfolio">
    <div className='main' >
      
      
    <Routes>
        <Route path="/" element={<Home  name="Sirla Ganesh" /> } />
        <Route path="/about" element={<About /> } />
        <Route path="/projects" element={<Projects /> } />
        <Route path="/contact" element={<Contact /> } />
      </Routes> 
      
    </div>
    </Router>
  );
}

export default App;
