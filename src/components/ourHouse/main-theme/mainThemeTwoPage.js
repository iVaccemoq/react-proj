import React, { Component } from 'react';

import Navigation from '../../coffeHouse/navigation/navigation';

import './mainThemeTwoPage.scss'

class MainthemeTwoPage extends Component {
    render() {
        return (
            <header className='mainTwoPage'>
                <div className="container">
                    <Navigation/>
                    <h2 className="mainTwoPage__title">Our Coffee</h2>
                </div>
            </header>
        );
    }
}

export default MainthemeTwoPage ;