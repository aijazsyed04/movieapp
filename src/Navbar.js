import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import './Navbar.css'
export default function Navbar({ onSearch }) {
    return (
        <div>
            <nav className='navbar-main-container'>
                <h1></h1>
                <ul className='nav-btns'>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <div className='ver-dividers'></div>
                        <Link to="/dashboard">Account</Link>
                    </li>
                    <li>
                        <div className='ver-dividers'></div>
                        <Link to="/movies">Movies</Link>
                    </li>
                    <li>
                        <div className='ver-dividers'></div>
                        <Link to="/tv">TV</Link>
                    </li>
                    <li>
                        <div className='ver-dividers'></div>
                        <Link to="/favmov">Movie Library</Link>
                    </li>
                    <li>
                        <div className='ver-dividers'></div>

                        <Link to="/favtv">TV Library</Link>
                    </li>
                </ul>
                <SearchBar onSearch={onSearch} />
            </nav>
        </div>
    )
}