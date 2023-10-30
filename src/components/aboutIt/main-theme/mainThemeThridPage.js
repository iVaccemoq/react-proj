import React, { Component } from 'react';

import './mainThemeThirdPage.scss'

import MainthemeTwoPage from '../../ourHouse/main-theme/mainThemeTwoPage';


class MainThemeThridPage extends Component {
    render() {
        /* const {img, from, descr, price} = this.props; */
        const {data} = this.props;
        return (
            <section className='third'>
                <MainthemeTwoPage/>
                <div className="third__wrapper">
                    <img className='third__big-img' src={data.img} alt="coffeeimg" />
                    <div className="third__about-wrapper">
                        <h2 className="third__title">About it</h2>
                        <div className="third__img-wrapper">
                            <img className='third__coffee-img' src="../icons/coffee-black.png" alt="coffee" />
                        </div>
                        <div className="third__country"><span className='third__font'>Country:</span> {data.from}</div>
                        <p className="third__descr"> <span className="third__font">Description:</span> {data.descr}</p>
                        <div className="third__price"> <span className="third__font">price: </span>{data.price}</div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MainThemeThridPage;