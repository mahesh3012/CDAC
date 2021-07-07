import React from 'react'
import {
    Link
} from "react-router-dom";
import classes from './Header.module.css'
import login_icon from '../images/login_icon.png'
import logout_icon from '../images/logout_icon.png'
import hamburger from '../images/hamburger.svg'

export const Header = () => {
let click=0;

window.addEventListener('resize',()=>{
    let vw = window.innerWidth;
    let menu=document.getElementsByClassName("Header_menu__29BHF")[0];
    if(vw > 900){
        menu.style.display="flex";
    }
    if(vw <= 900){
        menu.style.display="none";
    }
})

    if (sessionStorage.getItem("token")) {
        return (
            <header className={classes.navbar}>
           <span className={classes.logo}><strong>CDAC-Logo</strong></span>
           
            <div className={classes.menu}>
                <ul className={classes.left}>
                    
                    <Link to="/info"> <li>Home</li></Link>
                    <Link to="/about"> <li>About</li></Link>
                </ul>

                <ul className={classes.right}>


                    <Link to="/" onClick={() => {
                        sessionStorage.removeItem("token")
                    }}><li><img src={logout_icon} id={classes.logout_icon} alt="LogOut"/></li></Link>

                </ul>
                </div>
                <span className={classes.hamburger} onClick={(e)=>popMenu(e)}><img src={hamburger} alt="ham icon"/></span>
            </header>
        )
    }
    else{
        return(
        <header className={classes.navbar}>
            <span className={classes.logo}><strong>CDAC-Logo</strong></span>
            
            <div className={classes.menu}>
        <ul className={classes.left}>
            
            <Link to="/about"> <li>About</li></Link>
        </ul>

        <ul className={classes.right}>
        <Link to="/"><li>Log in</li><img src={login_icon} id={classes.login_icon} alt="LogIN"/></Link>
        </ul>
        </div>
        <span className={classes.hamburger} onClick={(e)=>popMenu(e)} ><img src={hamburger} alt="ham icon"/></span>
    </header> 
        )



    }
    function popMenu(e){
        e.preventDefault();
         let menu=document.getElementsByClassName("Header_menu__29BHF")[0];
         if(click==1){
             menu.style.display="none";
             click=0;
     }
     else if(click==0){
         menu.style.display="flex";;
         click=1;}
    }
}
