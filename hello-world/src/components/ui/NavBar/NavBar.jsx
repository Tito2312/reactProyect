import React from 'react'
import { Anchor } from '../Anchor/Anchor'

export const NavBar = () => {
  return (
    <nav className="nav">
        <ul className="navUl">
            <li className="anchor"><Anchor content="Home" /></li>
            <li className="anchor"><Anchor content="About Us" /></li>
            <li className="anchor"><Anchor content="Contact Us" /></li>
            <li className="anchor"><Anchor content="FAQ" /></li>
        </ul>
    </nav>
  )
}
