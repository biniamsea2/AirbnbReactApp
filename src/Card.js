import React from 'react';
import "./Card.css";


function Card({src, title, description,price}) {
    return (
        <div className="card">
            <img src={src} alt="card"/>
            <div className="card_info">
                <h2 Style="color:rgb(34,34,34); font-size:18px; font-family:arial; margin-top:8px;">{title}</h2>
                <h4 >{description}</h4>
                <h3>{price}</h3>

            </div>
            
        </div>
    )
}

export default Card
