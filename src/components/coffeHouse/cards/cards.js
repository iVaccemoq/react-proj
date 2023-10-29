import React, { Component } from 'react';

import '../ourBest/ourBest.scss';

class Cards extends Component {
    render() {
        const {img,title,price} = this.props;
        return (
            <li className="ourBest__card">
                <img src={img} alt="picture1" className="ourBest__img" />
                <div className="ourBest__cardName">{title}</div>
                <div className="ourBest__price">{price}</div>
            </li>
        );
    }
}

export default Cards;