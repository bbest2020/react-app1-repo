import React from 'react';
import ReactDOM from 'react-dom/client';
import { Redirect } from 'react-router';
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
import UseOfReducerHook from './components/UseOfReducerHook';
import UseOfRefHook from './components/UseOfRefHook';
import UseOfContextHook from './components/UseOfContextHook';

import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import AdminPage from './pages/AdminPage';
import ViewAdminPage from './pages/ViewAdminPage';
import EditAdminPage from './pages/EditAdminPage';


export default function App() {

    const [login, setLogin] = React.useState(false);
    
    return (
        <Router>
      <nav>
        <Link to="/">Home</Link> <br></br>
        <Link to="/about">About</Link><br></br>
        <Link to="/contact">Contact</Link><br></br>
        <Link to="/admin">Admin</Link>
      </nav>
      <button onClick={() => setLogin((login) => !login)}>{login?"Logout":"Login"}</button>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/contact/:username' element={<ContactPage />}></Route>
        <Route path='about' element={<AboutPage />}></Route>
        <Route path='admin' element={login? <AdminPage /> : <Navigate replace to="/" />}>
            <Route path='viewadmin' element={<ViewAdminPage />}></Route>
            <Route path='editadmin' element={<EditAdminPage />}></Route>
            <Route path='*' element={<ErrorPage />}></Route>
        </Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
      <div>
        Footer bar
      </div>
    </Router>
    );
}