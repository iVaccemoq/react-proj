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
root.render(

  <>
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/coffee' element={<AppTwoPage />} />
      <Route path='/coffee/promo' element={<MainThemeThridPage />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>

 
  </>
);


