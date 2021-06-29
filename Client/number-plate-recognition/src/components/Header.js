import React from 'react'
import {
    Link
} from "react-router-dom";
import classes from './Header.module.css'
import login_icon from '../images/login_icon.png'
import logout_icon from '../images/logout_icon.png'

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
                    }}><li><img src={logout_icon} id={classes.logout_icon}/></li></Link>

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
        <Link to="/"><li>Log in</li><img src={login_icon} id={classes.login_icon} alt="LogOut"/></Link>
        </ul>
    </header> 
        )
    }
}
