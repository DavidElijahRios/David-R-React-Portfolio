import React from "react";
import Projects from "../components/projects"
import GreatDate from "../assets/images/greatDate.png"

function Portfolio () {
    return (
   <div className="Project-container">

      <h1 className="heading">My Projects</h1>
      
     <Projects 
     title={"Great Date"}
     imgPath={GreatDate}
     description={"JavaScript/Ajax"}
     site="https://haleyhilton.github.io/No-Clue-What-To-Do/"
     repo="https://github.com/DavidElijahRios/No-Clue-What-To-Do"
     />
      {/* TODO: Where I left off! */}
    {/* <Projects 
     title={}
     imgPath={}
     description={}
     site={}
     repo={}
     /> */}

   </div>

    );

}


export default Portfolio;