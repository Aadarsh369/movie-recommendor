import React from 'react';
import '../styles/NavBar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="logo.png" alt="" />
            </div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/movies">Movies</a></li>
                <li><a href="/tv-shows">TV Shows</a></li>
                <li><a href="/about">About Us</a></li>
            </ul>
            <div className="navbar-icons">
                <div className="search-icon">🔍</div>
                <div className="profile-icon">⚙️</div>
            </div>
        </nav>
    );
}

export default Navbar;
