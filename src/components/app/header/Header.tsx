import React from 'react';
import '../../styles/Header.scss'

import {NavLink} from 'react-router-dom'

export const Header = () => {
    return (
        <div className="header">
            <div className="logo">logo</div>
            <ul className="nav">
                <li className="nav-item"><NavLink to="/registration">registration</NavLink></li>
                <li className="nav-item"><NavLink to="/login">log in</NavLink></li>
            </ul>
        </div>
    );
}
