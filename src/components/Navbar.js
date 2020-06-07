import React from 'react'
import heart from './../assets/black-heart.png'
import lens from './../assets/black-lens.png'

import './styles/Navbar.css'

function Navbar() {
    return (
        <nav className="Navbar">
            <h1 className="Brand-name">wearism</h1>
            <div className="Searcher">
                <span>Search for items</span>
                <img className="Img-icon" src={lens} alt="" />

            </div>
            <div className="Icons">
                <img className="Img-icon" src={heart} alt="" />
                <div className="Items">0</div>
                <span>US</span>
            </div>
        </nav>
    )
}

export default Navbar
