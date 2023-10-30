import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/coffeHouse/app/App';
import { BrowserRouter } from 'react-router-dom';

import AppTwoPage from './components/ourHouse/app/appTwoPage';

import { Route, Routes, Link  } from 'react-router-dom';

import './bootstrap-reboot.min.scss'

import MainThemeThridPage from './components/aboutIt/main-theme/mainThemeThridPage';

import AppThirdPage from './components/aboutIt/app/appThirdPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const r = new AppTwoPage();

const card = r.state.dataTwoPage.map ( item => {
  return <Route path={item.link} element={<AppThirdPage data={item} />} key={3}/>
})

root.render(
  <>
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} key={1}/>
      <Route path='/coffee' element={<AppTwoPage />} key={2} />
      {card}
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>

 
  </>
);


