import React from "react";
import Cover from "../components/Cover.jsx"
import AboutMe from "../components/AboutMe.jsx";
import Technologies from "../components/Technologies.jsx";
import Projects from "../components/Projects.jsx";

function Home() {
    return (
      <>
     <Cover/>
     <AboutMe/>
     <Projects/>
     <Technologies/>
     </>
    );
  }
  
  export default Home;
  