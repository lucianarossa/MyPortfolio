import React from "react";
import "../styles/About.css"


function About() {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Algo sobre mí ...</h3>
                <p>✨Soy una persona que se destaca por sus habilidades de comunicación, persistencia, autonomía y proactividad.</p>
                    <p>🚀Afronto cada desafío con entusiasmo, aprendiendo del error considerándolo como un aprendizaje a futuro.</p>
                    <p>😁Soy sociable y extrovertida por lo cual me es sumamente gratificante generar vínculos con las personas de los equipos que formo parte.
                    </p>
                    <p>💡Disfruto las oportunidades de presentar nuevas ideas, asumir responsabilidades, desarrollar proyectos para asegurar su éxito.</p>
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