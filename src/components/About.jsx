import React from "react";
import "../styles/About.css"


function About() {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Algo sobre mí ...</h3>
                <p>✨ Entusiasta, Perseverante y Apasionada ✨</p>
                <p>✨ Predispuesta, Responsable y Comprometida ✨</p>
                <div className="buttons">
                <button className="cv-button">
                    <a href="./CVLucianaRossa-Español.pdf" target="_blank" rel="noreferrer">MI CV ESPAÑOL</a>
                </button>
                <button className="cv-button">
                    <a href="./CVLucianaRossa-English.pdf" target="_blank" rel="noreferrer">MY ENGLISH CV</a>
                </button>
                </div>
            </div>
            <div className="about-img">
                <img src="https://i.imgur.com/68eWoU4.png" alt="aboutme" />
            </div>
               
        </div>
    )
}
export default About