import React from "react";
import Projects from "../components/projects"
import GreatDate from "../assets/images/greatDate.png"
import petConnect from "../assets/images/petConnect.png"
import techBlog from "../assets/images/the-tech-blog-screenshot.png"

function Portfolio() {
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
      <Projects
        title={"PetConnect"}
        imgPath={petConnect}
        description={"JavaScript/sequelize/node.js"}
        site="https://thepetconnection.herokuapp.com/"
        repo="https://github.com/DavidElijahRios/P2-Petconnect"
      />

      <Projects
        title={"Tech Blog"}
        imgPath={techBlog}
        description={"Javascript/sequelize/node.js"}
        site="https://rocky-tor-24531.herokuapp.com/"
        repo="https://github.com/DavidElijahRios/The-Tech-Blog"
      />

    </div>

  );

}


export default Portfolio;