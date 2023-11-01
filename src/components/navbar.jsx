import React from 'react';
import '../styles/NavBar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="dark-mode-icon">🌙</div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/movies">Movies</a></li>
                <li><a href="/tv-shows">TV Shows</a></li>
                <li><a href="/about">About Us</a></li>
            </ul>
            <div className="search">
                <div className="navbar-search">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="navbar-icons">
                    <div className="search-icon">🔍</div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
