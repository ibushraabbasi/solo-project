import React from "react"
import images from "../images/world.png"

export default function Navbar(){
    return(
        <nav>
            <img src={images} alt="earth" className="nav--logo"/>
            <p>my travel journal.</p>
        </nav>
    )
}