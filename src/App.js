import React from 'react';
import './App.scss';
import Form from "./component/Form/Form";
import logo from './assets/images/logo.svg';

function App() {
    return (
        <div className="app">
            <header className="app__header">
                <div className="app__header-title">Тестовое задание</div>
                <a className="app__header-link" href="/">
                    <img className="app__header-logo" src={logo} alt=""/>
                </a>
            </header>
            <div className="app__content">
                <Form />
            </div>
        </div>
    );
}

export default App;
