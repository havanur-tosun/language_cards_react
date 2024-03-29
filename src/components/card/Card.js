import React from 'react';
import "./Card.css";
import {categories} from '../../helper/Data';
import Item from '../item/Item';


const Card = () => {

  
    return( 
        <div className="cards-area-container">
            <h5 className="language-title">Languages</h5>
        <div className="cards-container">
            {categories.map((catElement,index) => {
                return <Item card={catElement}
                            key={index}/>
            })}
        </div>
        </div>      
    )
}


export default Card;

