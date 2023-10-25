import React, { Component } from 'react';

import Navigation from '../navigation/navigation';

import './footer.scss';

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
               <div className="container">
                    <div className="footer__wrapper">
                        <Navigation color='black'/>
                        <div className="footer__img-wrapper">
                            <img className='footer__img' src="./icons/coffee-black.png" alt="coffees" />
                        </div>
                    </div>
               </div>
            </footer>
        );
    }
}

export default Footer;