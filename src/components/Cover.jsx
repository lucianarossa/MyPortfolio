import React from "react";
import "../styles/cover.css"

function Cover() {
    return (
        <div className="cover-container">
            <video className="cover-video" autoPlay loop muted>
                <source src="https://i.imgur.com/dSvGB9C.mp4" type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="title-container">
                <h1 className="cover-welcome">¡ hola ! 🖐️ soy</h1>
                <h1 className="cover-title">Luciana Rossa</h1>
                <h2 className="cover-subt">FullStack Developer</h2>
                <div className="devices">
                    <img className="devices-style" src="https://i.imgur.com/J8dGOVH.png" alt="web" />
                    <h1 className="deviceplus">+</h1>
                    <img className="devices-style" src="https://i.imgur.com/jcjteRs.png" alt="mobile" />
                </div>
                <div className="buttonHero-Container">
                <button class="button-hero">proyectos</button>
                <button class="button-hero">tecnologías</button>
                <button class="button-hero">contacto</button>
                </div>
            </div>
            <img className="image-me" src="https://i.imgur.com/68eWoU4.png" alt="me" />
        </div>

    )
}

export default Cover