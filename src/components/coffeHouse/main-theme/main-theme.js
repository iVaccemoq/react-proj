import React, { Component } from 'react';

import Navigation from '../navigation/navigation';

import '../container/container.scss'
import './main-theme.scss'

class Maintheme extends Component {
    render() {
        return (
            <main className='main'>
                <div className="container">
                    <Navigation color={'white'}/>
                    <div className="main__wrapper">
                        <h2 className="main__title">Everything You Love About Coffee</h2>
                        <div className="main__img-wrapper">
                            <img className='main__img' src="./icons/coffees.png" alt="coffees" />
                        </div>
                        <div className="main__descr">We makes every day full of energy and taste Want to try our beans?</div>
                        <button className="main__button">More</button>
                    </div>
                </div>
            </main>
        );
    }
}

export default Maintheme;