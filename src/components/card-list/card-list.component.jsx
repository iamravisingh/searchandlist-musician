import React from 'react';
import {Card} from '../card/card.component'
import './card.styles.css';

export const CardList = props => (
    <div className='card-list'>
        {props.rappers.map((rapper, index) => (
            <Card
                key={index}
                rappers={rapper}
            />
        ))} 
     </div>
)