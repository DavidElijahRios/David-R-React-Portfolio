// import logo from './logo.svg';
import './App.css';
// Importing pages and components needed for rending and routing
import Header from './components/header.js'
import Footer from './components/footer.js'
import AboutMe from './pages/aboutMe.js'
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';

// Package needed to route pages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// !LEFT OFF ON PORTFOLIO.JS
// TODO: NEED TO FINISH ADDING PROJECTS TO PORTFOLIO
// TODO: NEED TO CREATE RESUME PAGE/COMPONENT?
// TODO: NEED TO STYLE THE WHOLE APPLICATION 
// TODO: NEED TO COMPLETE README.MD

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
     </Routes>
    </Router>
   <Footer />
  </div>
 
  );
}

export default App;

