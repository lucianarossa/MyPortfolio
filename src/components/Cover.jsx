import React from "react";
import "../styles/cover.css"

function Cover() {
    return (
        <div className="cover-container">
           <video className="video" src="https://i.imgur.com/dSvGB9C.mp4" autoPlay loop muted />
           <h1>Luciana Rossa</h1>
           <p>FullStack Developer | Web | Mobile</p>
        </div>

    )
}

export default Cover