import React from "react";
import logo from '../images/rtteam.png';

function Header (props) {
    return (
        <header className="header">
            <a
              className='header__link'
              href="https://github.com/rodiontazetdinov"
              target="_blank"
            >
                <img src={logo} className="header__logo" alt="logo" />
            </a>
        </header>
    );
}

export default Header;