import React from 'react'
import "../styles/Slider.css"

const Slider = () => {
  return (
    <div className='carousels-container'>
      <div className='carousel-container'>
        <div className='carousel-title'>
          <h2>Mis Proyectos Web</h2>
          <img src="https://i.imgur.com/J8dGOVH.png" alt="web" />
        </div>
        <div className='slides-box'>
          <div className='slide-container-web'>

            <video className="carousel-video" autoPlay loop muted>
              <source src="https://i.imgur.com/zEfU0Dj.mp4" type='video/mp4' />
            </video>
            <div className='slide-desc'>
              <span>MyTinerary</span>
              <a href="https://my-tinerary-rossa.herokuapp.com/" target="_blank" rel="noreferrer">
                <i class="fa-solid fa-globe web"></i>
              </a>
              <a href="https://github.com/lucianarossa/MyTinerary-React/" target="_blank" rel="noreferrer">
                <i className='fab fa-github github git-icon'></i>
              </a>
            </div>

          </div>

          <div className='slide-container-web'>
            <video className="carousel-video" autoPlay loop muted>
              <source src="https://i.imgur.com/1AsXsx0.mp4" type='video/mp4' />
            </video>
            <div className='slide-desc'>
              <span>BoxBonny</span>
              <a href="https://boxbonny.herokuapp.com/" target="_blank" rel="noreferrer">
                <i class="fa-solid fa-globe web"></i>
              </a>
              <a href="https://github.com/lucianarossa/Boxbonny-React/tree/frontend/" target="_blank" rel="noreferrer">
                <i className='fab fa-github github git-icon'></i>
              </a>
            </div>

          </div>

        </div>
      </div>

      <div className='carousel-container'>
        <div className='carousel-title'>
          <h2>Mis Proyectos Mobile</h2>
          <img src="https://i.imgur.com/jcjteRs.png" alt="mobile" />
        </div>
        <div className='slides-box'>
          <div className='slide-container-mobile'>
            <a href="https://github.com/lucianarossa/MyTinerary-ReactNative/" target="_blank" rel="noreferrer">
              <video className="carousel-video" autoPlay loop muted>
                <source src="https://i.imgur.com/5CXbgsd.mp4" type='video/mp4' />
              </video>
              <div className='slide-desc'>
                <span>MyTinerary Mobile</span>
                <i className='fab fa-github github git-icon'></i>
              </div>
            </a>
          </div>

          <div className='slide-container-mobile'>
            <a href="https://github.com/lucianarossa/Boxbonny-React/tree/native/" target="_blank" rel="noreferrer">
              <video className="carousel-video" autoPlay loop muted>
                <source src="https://i.imgur.com/1pzGytc.mp4" type='video/mp4' />
              </video>
              <div className='slide-desc'>
                <span>BoxBonny Mobile</span>
                <i className='fab fa-github github git-icon'></i>
              </div>
            </a>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Slider