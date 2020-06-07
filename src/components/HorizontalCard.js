import React, { useState } from 'react';
// import './styles/HorizontalCard.css';
// import lightning from './../assets/black-energy.png';

function HorizontalCard(props) {

    const [image, setImage] = useState(null);

    let cardStyles = {
        display: 'flex',
        color: 'black',
        backgroundColor: 'var(--element-gray)',
        alignItems: 'center',
        padding: '0 20px',
        justifyContent: 'space-between',
        width: props.width,
        height: props.height,
        borderRadius: '15px',
        margin: '15px 15px 0px 0px'
    }

    const selected =  (isSelected) => {
        if (isSelected) {
            cardStyles.color = 'white';
            cardStyles.backgroundColor = 'rgb(154, 102, 225)';
        }
        if(props.icon){
            assignIcon(isSelected,props.icon)
        }
        else{
            cardStyles.justifyContent = 'center'

        }
       
    }

    const assignIcon = (isSelected,icon) =>{
        if(isSelected)
        {
            import(`./../assets/white-${icon}.png`).then(resp => {
                setImage(resp.default);
            })
    
        }
        else{
            import(`./../assets/black-${icon}.png`).then(resp => {
                setImage(resp.default);
            })
        }
    }

    selected(props.isSelected);

    return (

        <div style={cardStyles} className="Card">
            <span>{props.text}</span>
            <img src={image} alt="" />
        </div>
    )
}

export default HorizontalCard
