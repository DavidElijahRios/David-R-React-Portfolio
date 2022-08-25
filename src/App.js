// import logo from './logo.svg';
import './App.css';
// Importing pages and components needed for rending and routing
import Header from './components/header.js'
import Footer from './components/footer.js'
import AboutMe from './pages/aboutMe.js'
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';

// Package needed to route pages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// !LEFT OFF ON PORTFOLIO.JS
// TODO: NEED TO STYLE THE WHOLE APPLICATION 
// TODO: NEED TO COMPLETE README.MD
// TODO: need to add link functionality

// Actual functioning app
function App() {
  return (
  <div>
   <Header />
   <Router>
     <Routes>
        <Route path="/" element={<AboutMe />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/resume" element={<Resume />}/>
     </Routes>
    </Router>
   <Footer />
  </div>
 
  );
}

export default App;

