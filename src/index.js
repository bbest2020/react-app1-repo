import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import MainPage from './components/MainPage';
import HeaderPage from './components/HeaderPage';
import FooterPage from './components/FooterPage';
import DisplayName from './components/DisplayName';
import AddItem from './components/AddItem';
import ListQuote from './components/ListQuote';
import CreatePersonForm from './components/CreatePersonForm';
import LoadProfileFromData from './components/LoadActivityAPI';
import TensieMain from './components/TensieMain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <HeaderPage />
      <MainPage />
      <FooterPage />
      <DisplayName />
      <AddItem />
      <ListQuote />
      <CreatePersonForm />
      <LoadProfileFromData/>
      <TensieMain />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
