import React from 'react';
import Field from '../Field/Field';
import './Card.css'

function Card({handleOnClick,gameState}){
    return(
        <div className='card'>
            <span className='card__container'>
                <Field handleOnClick ={handleOnClick} gameState={gameState}/>
            </span>
        </div>
    )
}

export default Card;