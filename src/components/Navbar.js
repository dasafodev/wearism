import React from 'react'
// import heart from './../assets/black-heart.png'
import lens from './../assets/black-lens.png'

import './styles/Navbar.css'

function Navbar(props) {
    // const [hearth, setHearth] = useState('');
    // import(`./../assets/white-${props.currentTheme}.png`).then(resp => {
    //             setImage(resp.default);
    //         })
    // i
    return (
        <nav className="Navbar">
            <h1 className="Brand-name">wearism</h1>
            <div className="Searcher">
                <span>Search for items</span>
                <img className="Img-icon" src={lens} alt="" />

            </div>
            <div className="Icons">
                <div className="Btn-theme" onClick={props.changeTheme}>
                <p>{props.currentTheme}</p>
                </div>
                {/* <img className="Img-icon" src={heart} alt="" /> */}
                <div className="Items">0</div>
                <p>US</p>
            </div>
        </nav>
    )
}

export default Navbar
