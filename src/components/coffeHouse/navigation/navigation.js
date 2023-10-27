import React, { Component } from 'react';

import { Link  } from 'react-router-dom';

import './navigation.scss'



class Navigation extends Component {
    render() {

        let clazz = ''
        let img = ''
        let ofsset = 'navigation'
        if (this.props.color === 'black') {
            clazz = 'navigation__item_black'
            img = '../icons/coffe-black.png'
            ofsset += ' navigation_black'
        } else {
            clazz = 'navigation__item'
            img = '../icons/coffee.png'
        }

        return (
            <>
            <ul className={ofsset}>
                <img src={img} alt="coffee" className="navigation__coffee" />
                <li className={clazz}>
                    <Link to="/">Coffee house</Link>
                </li>
                <li className={clazz}>
                    <Link to="/coffee">Our coffee</Link>
                </li>
                <li className={clazz}>
                    <Link to="/foryou">For your pleasure</Link>
                </li>
            </ul>
            
            </>

            
            
        );
        
    }
}

export default Navigation;