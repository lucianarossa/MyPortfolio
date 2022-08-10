import React from 'react'
import "../styles/Slider.css"

const slidesInfo = [
    {
        src: "https://i.imgur.com/5CXbgsd.mp4",
        alt: "MyTinerary Mobile",
        desc: "MyTinerary Mobile"
    },
    {
        src: "https://i.imgur.com/1pzGytc.mp4",
        alt: "BoxBonny Mobile",
        desc: "BoxBonny Mobile"
    },

]

const SlidesMobile = slidesInfo.map(slide => (
    <div className='slide-container-mobile'>
        <video className="carousel-video" autoPlay loop muted>
            <source src={slide.src} type='video/mp4' />
        </video>
        <div className='slide-desc'>
            <span>{slide.desc}</span>
        </div>
    </div>
))


export default SlidesMobile