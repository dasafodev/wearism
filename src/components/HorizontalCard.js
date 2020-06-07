import React, { useState, useEffect } from 'react';
// import './styles/HorizontalCard.css';
import lightning from './../assets/black-energy.png';

function HorizontalCard(props) {

    const [image, setImage] = useState(lightning);

    const cardStyles = {
        display: 'flex',
        color: 'black',
        'backgroundColor': 'var(--element-gray)',
        'alignItems': 'center',
        'justifyContent': 'space-around',
        'width': '220px',
        'height': '70px',
        'borderRadius': '15px'
    }
    // useEffect(() => {
    //     let title = React.createRef();
    //     console.log(title)
    //     const selected = (isSelected) => {

    //         if (isSelected && title.current) {
    //             title.current.style.cssText = `
    //                 color: white;
    //                 background-color: rgb(154, 102, 225);
    //                 `;
    //             import(`./../assets/white-energy.png`).then(resp => {
    //                 setImage(resp.default);
    //             })
    //         }

    //     }

    //     selected(props.isSelected);
    // })

    return (

        <div style={cardStyles} className="Card">
            <span>Hola</span>
            <img src={image} alt="" />
        </div>
    )
}

export default HorizontalCard
