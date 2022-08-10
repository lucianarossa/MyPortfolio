import React from "react";
import "../styles/cover.css"

function Contact() {
    return (
        <div className="cover-container">
            <video className="cover-video contact-video" autoPlay loop muted>
                <source src="https://i.imgur.com/dSvGB9C.mp4" type='video/mp4' />
            </video>
            <div className="overlay overlay-contact"></div>
            <div className="container-principal">
                <h1 className="cover-title contact-title">CONTACTO</h1>
                <div className="devices contact-container">
                    <div className="Contact-Cont">
                        <img className="Contact-Logo" src="https://i.imgur.com/Opmsdl7.png" alt="location" />
                        <h1 className="Contact-text">Córdoba, Argentina</h1>
                    </div>
                    <div className="Contact-Cont">
                        <img className="Contact-Logo" src="https://i.imgur.com/prfkZNx.png" alt="telephone" />
                        <h1 className="Contact-text">+549 3513861779</h1>
                    </div>
                    <div className="Contact-Cont">
                        <img className="Contact-Logo" src="https://i.imgur.com/l6a0oMl.png" alt="mail" />
                        <h1 className="Contact-text">lucianarossa@gmail.com</h1>
                    </div>
                    <div className="Contact-Cont">
                        <img className="Contact-Logo" src="https://i.imgur.com/tD41Oq7.png" alt="linkedin" />
                        <h1 className="Contact-text">linkedin.com/in/lucianarossa1</h1>
                    </div>
                    <div className="Contact-Cont">
                        <img className="Contact-Logo" src="https://i.imgur.com/m3xat06.png" alt="github" />
                        <h1 className="Contact-text">github.com/lucianarossa</h1>
                    </div>
                </div>
                <div className="buttonHero-Container">
                    <button class="button-hero button-contact">back home</button>
                </div>
            </div>
            <img className="image-me" src="https://i.imgur.com/68eWoU4.png" alt="me" />
        </div>

    )
}

export default Contact