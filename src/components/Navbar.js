import React from 'react'
import './styles/Navbar.css'

function Navbar() {
    return (
        <nav className="Navbar">
            <img src="" alt="My Web" />
            <div className="Searcher">
                <span>Search for items</span>
                <span>Lupa</span>
            </div>
            <div className="icons">
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
        </nav>
    )
}

export default Navbar
