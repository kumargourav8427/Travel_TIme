import React from 'react'
import logo from './logo.PNG'
import './header.css';
import {FiSearch} from 'react-icons/fi'

function Header() {
    return (
        <header>
            <div>
                <div className='logo'>
                    <img src={logo} alt='Logo' />
                </div>
            </div>
            <div className='search'>
                <FiSearch/>
            </div>
        </header>


    )
}

export default Header
