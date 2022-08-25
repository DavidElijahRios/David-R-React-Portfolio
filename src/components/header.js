import React from "react";
// Import Link from react
import { Link } from "react-router-dom";

function Header() {
   return (
    <header>
    <h1>David Elijah Rios</h1>
   <div id="nav-bar">
     <a href="/">About Me</a>
     <a href="/portfolio">Portfolio</a>
     <a href="/contact">Contact</a>
     <a href="/resume">Resume</a>
   </div>
 </header>
  );
}

export default Header;