import React, { Component } from 'react';

import './cards.scss'

class Cards extends Component {
    render() {
        return (
            <li className="coffeeCards__Item">
                <img src="" alt="coffee" />
                <h2 className="coffeeCards__title">AROMISTICO Coffee 1 kg</h2>
                <div className="coffeeCards__from">Brazil</div>
                <div className="coffeeCards__price">6.99$</div>
            </li>
        );
    }
}

export default Cards;