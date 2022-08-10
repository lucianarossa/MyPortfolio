import React from 'react'
import "../styles/Slider.css"

const slidesInfo = [
    {
        src: "https://i.imgur.com/zEfU0Dj.mp4",
        alt: "MyTinerary",
        desc: "MyTinerary"
    },
    {
        src: "https://i.imgur.com/1AsXsx0.mp4",
        alt: "BoxBonny",
        desc: "BoxBonny"
    },

]

const SlidesWeb = slidesInfo.map(slide => (
    <div className='slide-container-web'>
        <video className="carousel-video" autoPlay loop muted>
            <source src={slide.src} type='video/mp4' />
        </video>
        <div className='slide-desc'>
            <span>{slide.desc}</span>
        </div>
    </div>
))


export default SlidesWeb