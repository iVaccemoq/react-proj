import React, { Component } from 'react';

import './coffeCards.scss'

import Cards from '../cards/cards';


class CoffeeCards extends Component {

    render() {

        const data = this.props.data.map(({img, from, price, title, link, id}) => {
            return <Cards img={img} from={from} price={price} title={title} link={link} key={id}/>
        })

        return (
            <section className='coffeeCards'>
                <div className="container">
                    <div className="coffeeCards__wrapper">
                        <div className="coffeeCards__looking-wrapper">
                            <div className="coffeeCards__looking">Looking for</div>
                            <form action="/" className="coffeeCards__form">
                                <input onChange={(e) => this.props.onSearch(e)} type="text" placeholder='start typing here...' className="coffeeCards__input" />
                            </form>
                        </div>
                        <div className="coffeeCards__filter-wrapper">
                            <div className="coffeeCards__filter">Or filter</div>
                            <div className="coffeeCards__buttons-wrapper">
                                <button className="coffeeCards__button">Brazil</button>
                                <button className="coffeeCards__button">Kenya</button>
                                <button className="coffeeCards__button">Columbia</button>
                            </div>
                        </div>
                    </div>
                    <ol className="coffeeCards__items">
                        {data}
                    </ol>
                </div>
            </section>
        );
    }
}

export default CoffeeCards;