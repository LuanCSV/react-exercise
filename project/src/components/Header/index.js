import React, { useState } from 'react';
import logo from '../../logo.svg';
import './style.css';
import clds from 'console-log-design-system';

// useState consiste em um estado inicial, 
// depois numa função com um método q vai definir a mudança desse estado

const {makeComment} = clds;

const Header = () => {
    const [tema, setTema] = useState('dark') ;

    const toggleTema = () => {
        let novoTema = tema === 'dark' ? 'light' : 'dark';
        setTema(novoTema);
        makeComment(
            'toggleTema',
            [`tema >> ${novoTema}`],
            'success',
            'md',
            'badgeInverted'
        );
        
    }

    return (
        <header 
        className={`App-header App-header--${tema}`}
        onClick={() => toggleTema()}
        >
            <img 
                src={logo}
                className="App-logo"
                alt="Logo"
            /> 
            <h1> {tema} </h1>
            <a
                className= {`App-link App-link--${tema}`}
                href="https://github.com/LuanCSV/react-exercise"
                target="_blank"
                rel="noopener noreferrer"
            >
                Acessar repositório
            </a>
        </header>
    )
}

export default Header