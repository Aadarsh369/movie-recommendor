import React, { useState } from 'react';
import '../styles/NavBar.css';

let Movies = ['Action', 'Drama', 'Sci-Fi','Crime','Fantasy','Thriller','Adventure'];
let Languages = ['English','Hindi', 'French'];
function Navbar() {
    const [isMoviesDropdownOpen, setMoviesDropdownOpen] = useState(false);
    const [isLanguagesDropdownOpen, setLanguagesDropdownOpen] = useState(false);

    const toggleMoviesDropdown = () => {
        setMoviesDropdownOpen(!isMoviesDropdownOpen);
    };

    const toggleLanguagesDropdown = () => {
        setLanguagesDropdownOpen(!isLanguagesDropdownOpen);
    };

    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li onMouseEnter={toggleMoviesDropdown} onMouseLeave={toggleMoviesDropdown}>
                    <a href="/genres">Movies</a>
                    {isMoviesDropdownOpen && (
                        <div className="dropdown">
                            <ul>
                               {Movies.map((genre)=> <li><a href="/genre1">{genre}</a></li>)}
                            </ul>
                        </div>
                    )}
                </li>
                <li onMouseEnter={toggleLanguagesDropdown} onMouseLeave={toggleLanguagesDropdown}>
                    <a href="/tv-shows-genre">Languages</a>
                    {isLanguagesDropdownOpen && (
                        <div className="dropdown">
                            <ul>
                                {Languages.map(genre => <li><a href="/tv-genre1">{genre}</a></li> )}
                            </ul>
                        </div>
                    )}
                </li>
                <li><a href="/about">About Us</a></li>
            </ul>
            <div className="search">
                <div className="navbar-search">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="navbar-icons">
                    <div className="search-icon">🔍</div>
                </div>
                <button>
                    <div className="dark-mode-icon">🌙</div>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
