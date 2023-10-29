import React, { Component } from 'react';

import './ourBest.scss'

import Cards from '../cards/cards';

class OurBest extends Component {
    
    render() {
        const dataCards = this.props.data.map(({img, title, price, id}) => {
            return (
                <Cards img={img} title={title} price={price} key={id}/>
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