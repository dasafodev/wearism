import React, { useState } from 'react';
import Heart from './../assets/heart.png';
function VerticalCard(props) {

    const [image, setImage] = useState('');

    const importImage =  () => {
         import(`./../assets/${props.image}.jpg`).then(resp => {
            setImage(`url(${resp.default})`);

        })
    }

    importImage();

    const vertCardStyle = {
        borderRadius: '20px',
        height: '250px',
        width: '200px',
        backgroundImage:image,
        backgroundSize:'cover',
        backgroundPosition:'center',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'flex-end',
        padding:'15px'
    }

    const heartStyle = {
        height:'30px',
        width:'30px',
        backgroundColor:'var(--element-gray)',
        borderRadius:'30px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }

    return (
        <div style={vertCardStyle} className="VertCard">
            <div style={heartStyle} className="Heart">
                <img src={Heart} alt=""/>
            </div>
        </div>
    )
}

export default VerticalCard
