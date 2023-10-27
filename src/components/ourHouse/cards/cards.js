import React, { Component } from 'react';

import { Link  } from 'react-router-dom';

import './cards.scss'

class Cards extends Component {
    render() {
        const {img, from, price, title, link} = this.props; 
        return (
            <li className="cards">
                <Link to={link}>
                    <img className='cards__img' src={img} alt="coffee" />
                    <h2 className="cards__title">{title}</h2>
                    <div className="cards__from">{from}</div>
                    <div className="cards__price">{price}</div>
                </Link>
            </li>
        );
    }
}

export default Cards;