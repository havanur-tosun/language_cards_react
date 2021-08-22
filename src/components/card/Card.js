import React from 'react';
import "./Card.css";
import {categories} from '../../helper/Data';


function Card() {
    return (
        <div className="card-container">
            <h2>Languages</h2>
            {categories.map((card) => {
                return (
                    <div className="card">
                        <img  id="card-img" src={card.img}></img>
                        <h5>{card.name}</h5>
                    </div>
                )
                })}
        </div>
    )
}


export default Card;
