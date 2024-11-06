import React from 'react'
import './Header.css'
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import Nav from '../Nav/Nav';
const Header = () => {
    return (
        <>
            <header className='header fixed-top d-flex align-items-center' id='header'>
<Logo/>
<SearchBar/>
<Nav/>
            </header>
        </>
    )
}

export default Header
