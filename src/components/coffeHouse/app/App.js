import './App.css';

import Maintheme from '../main-theme/main-theme';
import AboutUs from '../about-us/about-us';
import OurBest from '../ourBest/ourBest';
import Footer from '../footer/footer';

function App() {
  return (
    <>
    <div className="App">
      <Maintheme/>
      <AboutUs/>
      <OurBest/>
      <Footer/>
    </div> 

    </>
    
  );
}

export default App;
