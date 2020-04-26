import React from 'react'
import './card.style.css';

export const Card = props => (
    <div className='card-container'>
        <img alt = 'rapper' src = {`https://robohash.org/${props.rappers.employee_name}?set=set3&size=180x180`}/>
        <h2>{props.rappers.employee_name}</h2>
        <h2>{props.rappers.employee_age}</h2>
    </div>
)