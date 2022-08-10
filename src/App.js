import React, {useState, useEffect} from "react";
import "./styles/App.css"
import Cover from "./components/Cover";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Slider from "./components/Slider";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  const [scrollHeight, setScrollheight] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollheight(position)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [scrollHeight])


  return (
    <div className="App">
    <Navbar isScrolling={scrollHeight}/>
    <Cover/>
    <About/>
    <Slider/>
    <Info/>
    <Footer/>
    </div>
  );
}

export default App;
