import React from 'react'
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import SlidesWeb from './SlidesWeb'
import SlidesMobile from './SlidesMobile'
import "../styles/Slider.css"

const Slider = () => {
  return (
    <div className='carousels-container'>
    <div className='carousel-container'>
        <div className='carousel-title'>
            <h2>Mis Proyectos Web</h2>
        </div>
        <Carousel
        arrows
        slidesPerPage={1}
        infinite
        animationSpeed={200}
        centered
        offset={50}
        itemWidth={350}
        slides={SlidesWeb}

        />
    </div>
    <div className='carousel-container'>
    <div className='carousel-title'>
        <h2>Mis Proyectos Mobile</h2>
    </div>
    <Carousel
    arrows
    slidesPerPage={1}
    infinite
    animationSpeed={200}
    centered
    offset={50}
    slides={SlidesMobile}
    itemWidth={350}

    />
</div>
</div>
  )
}

export default Slider