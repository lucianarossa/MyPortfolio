import React from 'react'
import "../styles/Slider.css"

 const WebProyects=[
  {
    video: "https://i.imgur.com/zEfU0Dj.mp4",
    name: "MyTinerary",
    web: "https://my-tinerary-rossa.herokuapp.com/",
    github: "https://github.com/lucianarossa/MyTinerary-React/",
    id:1
  },
  {
    video: "https://i.imgur.com/1AsXsx0.mp4",
    name: "BoxBonny",
    web: "https://boxbonny.herokuapp.com/",
    github: "https://github.com/lucianarossa/Boxbonny-React/tree/frontend/",
    id:2
  },
  {
    video: "https://i.imgur.com/uo9KGW5.mp4",
    name: "Amazing Events",
    github: "https://github.com/lucianarossa/AmazingEvents-JS/",
    id:3
  }
]


const MobileProyects = [
  {
    video: "https://i.imgur.com/5CXbgsd.mp4",
    name: "MyTinerary Mobile",
    github: "https://github.com/lucianarossa/MyTinerary-ReactNative/",
    id:1
  },
  {
    video: "https://i.imgur.com/1pzGytc.mp4",
    name: "BoxBonny Mobile",
    github: "https://github.com/lucianarossa/Boxbonny-React/tree/native/",
    id:2
  }
]


const Slider = () => {

  return (

    <div className='carousels-container'>
      <div className='carousel-container'>
        <div className='carousel-title'>
          <h2>Mis Proyectos Web</h2>
          <img src="https://i.imgur.com/J8dGOVH.png" alt="web" />
        </div>
        <div className='slides-container'>
        {WebProyects.map(project =>
          <div className='slides-box' key={project.id}>
            <div className='slide-container-web'>
              <video className="carousel-video" autoPlay loop muted>
                <source src={project.video} type='video/mp4' />
              </video>
              <div className='slide-desc'>
                <span>{project.name}</span>
                <a href={project.web} target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-globe web"></i>
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <i className='fab fa-github github git-icon'></i>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>

      <div className='carousel-container'>
        <div className='carousel-title'>
          <h2>Mis Proyectos Mobile</h2>
          <img src="https://i.imgur.com/jcjteRs.png" alt="mobile" />
        </div>
        <div className='slides-container'>
        {MobileProyects.map(mobile =>
        <div className='slides-box'>
        <div className='slide-container-mobile'>
          <a href={mobile.github} target="_blank" rel="noreferrer">
            <video className="carousel-video" autoPlay loop muted>
              <source src={mobile.video} type='video/mp4' />
            </video>
            <div className='slide-desc'>
              <span>{mobile.name}</span>
              <i className='fab fa-github github git-icon'></i>
            </div>
          </a>
        </div> 
        </div>
          )}
          </div>
      </div>
    </div>
  )
}

export default Slider