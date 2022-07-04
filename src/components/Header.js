import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default function Header(){
    return (
        <header id="main-header">
            <Link to="/">
                <h1>Melhores Filmes</h1>
            </Link>
        </header>
    );
}