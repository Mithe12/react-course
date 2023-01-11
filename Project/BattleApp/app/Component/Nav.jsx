import * as React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { sunIcon, moonIcon } from './icons';

export default function Nav({theme, toggleTheme}) {

    const toggleActive = ({isActive}) => "nav-link" + (isActive ? "active" : "")
    return(
        <nav className = "split">
            <NavLink
                to = "/"
                className = {toggleActive}
            > 
            Github Battle
            </NavLink>

            <ul className = "row">
                <li>
                    <NavLink
                        to = "/"
                        className = {toggleActive}
                    > 
                    Popular
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to = "/battle"
                        className = {toggleActive}
                    > 
                    Battle
                    </NavLink>
                </li>
                <li>
                    <button className = "btn secondary icon" onClick={toggleTheme}>
                        {theme === "light" ? moonIcon : sunIcon}
                    </button>
                </li>

            </ul>

        </nav>
    );
}

Nav.propType = {
    theme: PropTypes.string.isRequired,
    toggleTheme: PropTypes.func.isRequired
}