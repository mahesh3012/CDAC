import React from 'react'
import {
    Link
} from "react-router-dom";

import classes from './Header.module.css'

export const Header = () => {
    if (sessionStorage.getItem("token")) {
        return (
            <header className={classes.navbar}>

                <ul className={classes.left}>
                    <li><strong>CDAC-Logo</strong></li>
                    <Link to="/info"> <li>Home</li></Link>
                    <Link to="/about"> <li>About</li></Link>
                </ul>

                <ul className={classes.right}>


                    <Link to="/" onClick={() => {
                        sessionStorage.removeItem("token")
                    }}><li>Log out</li></Link>

                </ul>
            </header>
        )
    }
    else{
        return(
        <header className={classes.navbar}>

        <ul className={classes.left}>
            <li><strong>CDAC-Logo</strong></li>
            <Link to="/about"> <li>About</li></Link>
        </ul>

        <ul className={classes.right}>
            <Link to="/"><li>Log in</li></Link>
        </ul>
    </header> 
        )
    }
}
