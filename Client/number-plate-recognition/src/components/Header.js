import React from 'react'
import {
  Link
  } from "react-router-dom";

export const Header = () => {
    return (
        <header className="navbar">
            
                    <ul className="left">
                        <li><strong>CDAC-Logo</strong></li>
                        <Link to="/info"> <li>Info</li></Link>
                        <Link to="/about"> <li>About</li></Link>
                    </ul>

                    <ul className="right">
                        <li>Your Name</li>
                        <Link to="/"><li>Log Out</li></Link>
                    </ul>
        </header>
    )
}
