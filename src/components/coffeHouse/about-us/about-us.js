import React, { Component } from 'react';

import '../container/container.scss'
import './about-us.scss'

class AboutUs extends Component {
    render() {
        return (
            <section className='aboutUs'>
                <div className="container">
                    <div className="aboutUs__wrapper">
                        <h2 className='aboutUs__title'>About Us</h2>
                        <div className="aboutUs__img-wrapper">
                            <img className='aboutUs__img' src="./icons/coffee-black.png" alt="coffees" />
                        </div>
                        <p className="aboutUs__descr">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
                        <p className="aboutUs__descr">Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUs;