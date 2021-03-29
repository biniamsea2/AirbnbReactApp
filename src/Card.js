import React from 'react';
import "./Card.css";

function Card({src, title, description,price}) {
    return (
        <div className="card">
            <img src={src} alt="card"/>
            <div className="card_info">
                <h2 Style="color:black;">{title}</h2>
                <h4 Style="color:black">{description}</h4>
                <h3>{price}</h3>

            </div>
            
        </div>
    )
}

export default Card
