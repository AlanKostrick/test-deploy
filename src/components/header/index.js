import { NavLink } from 'react-router-dom';
import React from 'react';
import style from './style.module.scss';

const Header = () => {
    return (
        <div className={style.header}>
            <h2>UserTracker</h2>
            <ul className={style.navList}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/users'>Our Users</NavLink>
            </ul>
        </div>
    );
}

export default Header;