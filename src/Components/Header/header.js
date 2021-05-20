import React from "react";
import './header.scss';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <nav className="header-nav">
                    <ul className="list">
                        <li className="item"><h1>FORFEITS</h1></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header