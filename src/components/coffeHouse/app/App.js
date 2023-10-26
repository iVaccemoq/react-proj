import './App.css';

import Maintheme from '../main-theme/main-theme';
import AboutUs from '../about-us/about-us';
import OurBest from '../ourBest/ourBest';
import Footer from '../footer/footer';

import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {title: 'Solimo Coffee Beans 2 kg', img: './icons/picture1.png', price: '10.73$'},
        {title: 'Presto Coffee Beans 1 kg', img: './icons/picture2.png', price: '15.99$'},
        {title: 'AROMISTICO Coffee 1 kg', img: './icons/picture3.png', price: '6.99$'}
      ]
    }
  }
  render() {
    const {data} = this.state;
    return (
      <div className="App">
        <Maintheme/>
        <AboutUs/>
        <OurBest data={data}/>
        <Footer/>
      </div>     
    );
  }
}

export default App;
