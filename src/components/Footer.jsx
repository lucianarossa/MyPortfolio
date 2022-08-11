import React from 'react'
import "../styles/Footer.css"
import { Link as LinkRouter } from "react-router-dom"

const Footer = ({isScrolling}) => {
    const toTheTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }
    return (
        <footer className='footer'>
            <div className='footer-info'>
                <h1>Luciana Rossa</h1>
                <div className='location-box'>
                <i className="fa-solid fa-location-dot location"></i>
                <p>Córdoba, Argentina</p>
                </div>
                
            </div>

            <div className='footer-sns'>
                <div className='footer-contact'>
                    <h3>✨ Contactame y trabajemos juntos!</h3>
                </div>
                <div className='sns-links'>
                    <a href="https://www.linkedin.com/in/lucianarossa1/" target="_blank" rel="noreferrer">
                        <i className='fab fa-linkedin linkedin'></i>
                    </a>
                    <a href="https://github.com/lucianarossa/" target="_blank" rel="noreferrer">
                        <i className='fab fa-github github'></i>
                    </a>
                    <LinkRouter to="/formulario" onClick={toTheTop}>
                            <i className="fa-solid fa-at email"></i>
                    </LinkRouter>
                </div>
            </div>
        </footer>
    )
}

export default Footer