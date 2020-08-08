import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component'

export const Cardlist = props => {
    return (
        <div className='card-list'> 
            {props.monsters.map(monsters => (
                <Card key={monsters.id} monster={monsters}/>
            ))}
        </div>
    )
}