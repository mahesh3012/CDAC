import React from 'react'
import {
  Link
  } from "react-router-dom";

  import classes from './Header.module.css'
export const Header = () => {
    return (
        <header className={classes.navbar}>
            
                    <ul className={classes.left}>
                        <li><strong>CDAC-Logo</strong></li>
                        <Link to="/info"> <li>Info</li></Link>
                        <Link to="/about"> <li>About</li></Link>
                    </ul>

                    <ul className={classes.right}>
                        <li>Your Name</li>
                        <Link to="/"><li>Log Out</li></Link>
                    </ul>
        </header>
    )
}
