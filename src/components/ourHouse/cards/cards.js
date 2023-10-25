import React, { Component } from 'react';

import './cards.scss'

class Cards extends Component {
    render() {
        return (
            <li className="cards">
                <a href="/">
                    <img src="./icons/picture3.png" alt="coffee" />
                    <h2 className="cards__title">AROMISTICO Coffee 1 kg</h2>
                    <div className="cards__from">Brazil</div>
                    <div className="cards__price">6.99$</div>
                </a>
            </li>
        );
    }
}

export default Cards;