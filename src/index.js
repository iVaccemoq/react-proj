import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/coffeHouse/app/App';
import { BrowserRouter } from 'react-router-dom';

import AppTwoPage from './components/ourHouse/app/appTwoPage';

import { Route, Routes, Link  } from 'react-router-dom';

import './bootstrap-reboot.min.scss'

import MainThemeThridPage from './components/aboutIt/main-theme/mainThemeThridPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const r = new AppTwoPage();
console.log(r.state.dataTwoPage)

const card = r.state.dataTwoPage.map ( ({link, img, from, descr, price}) => {
/*   img.slice(0,5) */
  console.log(link)
  return <Route path={link} element={<MainThemeThridPage img={img} from={from} descr={descr} price={price} />} />
})

root.render(
  <>
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/coffee' element={<AppTwoPage />} />
      {card}
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>

 
  </>
);


