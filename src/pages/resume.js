import React from "react";

import pdf from "../assets/images/resume/Resume-8.6.22.pdf";

function Resume () {
    return (
        <div>
      <h1>Resume</h1>
      <a href={pdf} target="_blank" rel="noopener noreferrer"><button className="viewBtn"> View Resume </button></a>
      <a href={pdf} download target="_blank" rel="noopener noreferrer"><button className="dwnloadBtn"> Download Resume </button></a>
        </div>
    )
}

export default Resume;