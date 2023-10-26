import React, { Component } from 'react';

import './ourBest.scss'

class OurBest extends Component {
    
    render() {
        const dataCards = this.props.data.map(({img, title, price}) => {
            console.log()
            return (
                <li className="ourBest__card">
                    <img src={img} alt="picture1" className="ourBest__img" />
                    <div className="ourBest__cardName">{title}</div>
                    <div className="ourBest__price">{price}</div>
                </li>
            );
        })
        
        return (
            <section className='ourBest'>
                <div className="container">
                    <h2 className="ourBest__title">Our best</h2>
                    <ol className="ourBest__cards">
                        {dataCards}
                    </ol>
                </div>
            </section>
        );
    }
}

export default OurBest;