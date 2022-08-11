import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
        <p id='title'>Famous Paintings of Barock Masters</p>
        <nav>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/about">About</Link>
            <Link className='link' to="/contacts">Contacts</Link>
        </nav>
    </div>
  )
}

export default Header