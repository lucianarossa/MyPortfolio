import React from "react";
import "../styles/About.css"


function About() {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Algo sobre mí ...</h3>
                <p>✨ Entusiasta, Perseverante y Apasionada ✨</p>
                <p>✨ Predispuesta, Responsable y Comprometida ✨</p>
                <button className="cv-button">
                    <a href="./LucianaRossa.pdf" target="_blank" rel="noreferrer">MI CV</a>
                </button>
            </div>
            <div className="about-img">
                <img src="https://i.imgur.com/68eWoU4.png" alt="aboutme" />
            </div>
               
        </div>
    )
}
export default About