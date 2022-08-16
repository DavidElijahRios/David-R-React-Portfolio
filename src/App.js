// import logo from './logo.svg';
import './App.css';
import Header from './components/header.js'
import Footer from './components/footer.js'
import AboutMe from './components/aboutMe.js'
import Contact from './components/contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
  <div>
   <Header />
   <Router>
     <Routes>
        <Route path="/" element={<AboutMe />}/>
        <Route path="/contact" element={<Contact />}/>
     </Routes>
    </Router>
   <Footer />
  </div>
 
  );
}

export default App;


// <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>