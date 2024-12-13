/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <ul className='flex justify-around border-4 p-4 shadow-2xl text-purple-600 font-bold bg-blue-300'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar