import React, { Component } from 'react';

import './aboutUsTwoPage.scss'

class AboutUsTwoPage extends Component {
    render() {
        return (
            <section className='aboutUsTwoPage'>
                <div className="container">
                    <div className="aboutUsTwoPage__wrapper">
                        <img className='aboutUsTwoPage__human' src="./icons/Human.jpg" alt="Human" />
                        <div className="aboutUsTwoPage__text-wrapper">
                            <h2 className="aboutUsTwoPage__title">About our beans</h2>
                            <div className="aboutUsTwoPage__img-wrapper">
                                <img className='aboutUsTwoPage__img' src="./icons/coffee-black.png" alt="coffees" />
                            </div>
                            <p className="aboutUsTwoPage__text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                            <p className="aboutUsTwoPage__text">
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions.
                            </p>
                            <p className="aboutUsTwoPage__text">As greatly removed calling pleased improve an. Last ask him cold feel</p>
                            <p className="aboutUsTwoPage__text">met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUsTwoPage;