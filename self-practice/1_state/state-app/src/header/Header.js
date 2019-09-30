import React from 'react';
import './Header.css'

const Header = ()=> {
    return (
        <nav className="main-nav">
            <ul className="main-nav-list">
                <li className="main-nav-list__item">
                    <a href="">
                        Home
                    </a>
                </li>
                <li className="main-nav-list__item">
                    <a href="">
                        News
                    </a>
                </li>
                <li className="main-nav-list__item">
                    <a href="">
                        Test site
                    </a>
                </li>
                <li className="main-nav-list__item">
                    <a href="">
                        Wow so much react
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Header;