import React from 'react'
import Logo from '/images/header.png'
import "../scss/layout/Header.scss";

function Header() {
  return (
    <header className='Hedaer'>
        <img className='image' src={Logo} alt="Logo Rick N Morty" />

    </header>
  )
}

export default Header