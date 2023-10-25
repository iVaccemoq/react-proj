import React, { Component } from 'react';

import './ourBest.scss'

class OurBest extends Component {
    render() {
        return (
            <section className='ourBest'>
                <div className="container">
                    <h2 className="ourBest__title">Our best</h2>
                    <ol className="ourBest__cards">
                        <li className="ourBest__card">
                            <img src="./icons/picture1.png" alt="picture1" className="ourBest__img" />
                            <div className="ourBest__cardName">Solimo Coffee Beans 2 kg</div>
                            <div className="ourBest__price">10.73$</div>
                        </li>
                        <li className="ourBest__card">
                            <img src="./icons/picture2.png" alt="picture2" className="ourBest__img" />
                            <div className="ourBest__cardName">Presto Coffee Beans 1 kg</div>
                            <div className="ourBest__price">15.99$</div>
                        </li>
                        <li className="ourBest__card">
                            <img src="./icons/picture3.png" alt="picture3" className="ourBest__img" />
                            <div className="ourBest__cardName">AROMISTICO Coffee 1 kg</div>
                            <div className="ourBest__price">6.99$</div>
                        </li>
                    </ol>
                </div>
            </section>
        );
    }
}

export default OurBest;