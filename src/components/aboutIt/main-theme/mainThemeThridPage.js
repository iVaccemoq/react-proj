import React, { Component } from 'react';

import './mainThemeThirdPage.scss'

import MainthemeTwoPage from '../../ourHouse/main-theme/mainThemeTwoPage';
import Navigation from '../../coffeHouse/navigation/navigation';


class MainThemeThridPage extends Component {
    render() {
        const {img, from, descr, price} = this.props;
        return (
            <section className='third'>
                <MainthemeTwoPage/>
                <div className="third__wrapper">
                    <img className='third__big-img' src={img} alt="coffeeimg" />
                    <div className="third__about-wrapper">
                        <h2 className="third__title">About it</h2>
                        <div className="third__img-wrapper">
                            <img className='third__coffee-img' src="../icons/coffee-black.png" alt="coffee" />
                        </div>
                        <div className="third__country"><span className='third__font'>Country:</span> {from}</div>
                        <p className="third__descr"> <span className="third__font">Description:</span> {descr}</p>
                        <div className="third__price"> <span className="third__font">price: </span>{price}</div>
                    </div>
                </div>
                <Navigation color={'black'}/>
            </section>
        );
    }
}

export default MainThemeThridPage;