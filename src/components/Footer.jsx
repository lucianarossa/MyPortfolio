import React from 'react'
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-info'>
            <h1>Luciana Rossa</h1>
            <p>Córdoba, Argentina</p>
        </div>
        
        <div className='footer-sns'>
        <div className='footer-contact'>
            <h3>Contactame y trabajemos juntos!</h3>
        </div>
            <div className='sns-links'>
                <a href="https://www.linkedin.com/in/lucianarossa1/" target="_blank" rel="noreferrer">
                    <i className='fab fa-linkedin linkedin'></i>
                </a>
                <a href="https://github.com/lucianarossa/" target="_blank" rel="noreferrer">
                    <i className='fab fa-github github'></i>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer