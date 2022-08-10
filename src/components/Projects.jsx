import React from "react";
import "../styles/cover.css"

function Projects() {
    return (
        <div className="Projects-Container">
            <h1 className="projects-title">ALGUNOS DE MIS PROYECTOS</h1>
            <div class="firstAnimation">
                <div class="secondAnimation">
                    <div class="card">
                        <video className="cardVideo" autoPlay loop muted>
                        <source src="https://i.imgur.com/zEfU0Dj.mp4" type='video/mp4' />
                        </video>
                    </div>
                </div>
                <h2 className="card-title">MyTinerary</h2>
                <p className="card-text">web de itinerarios de viajes</p>
            </div>
            <div class="firstAnimation">
                <div class="secondAnimation">
                    <div class="card">
                        <video className="cardVideo" autoPlay loop muted>
                        <source src="https://i.imgur.com/1AsXsx0.mp4" type='video/mp4' />
                        </video>
                    </div>
                </div>
                <h2 className="card-title">BoxBonny</h2>
                <p className="card-text">e-commerce de experiencias</p>
            </div>
            <div class="firstAnimation-mobile">
                <div class="secondAnimation">
                    <div class="card card-mobile">
                        <video className="cardVideo" autoPlay loop muted>
                        <source src="https://i.imgur.com/jsMSPzE.mp4" type='video/mp4' />
                        </video>
                    </div>
                </div>
                <h2 className="card-title">MyTinerary Mobile</h2>
                <p className="card-text">app de itinerarios de viajes</p>
            </div>
            <div class="firstAnimation-mobile">
                <div class="secondAnimation">
                    <div class="card card-mobile">
                        <video className="cardVideo" autoPlay loop muted>
                        <source src="https://i.imgur.com/1pzGytc.mp4" type='video/mp4' />
                        </video>
                    </div>
                </div>
                <h2 className="card-title">BoxBonny Mobile</h2>
                <p className="card-text">e-commerce de experiencias</p>
            </div>
        </div>

    )
}

export default Projects