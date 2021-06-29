import React, { useState } from 'react'
import { useHistory,Link, Redirect } from "react-router-dom";
import classes from './Login.module.css'
import login_img from '../images/login.png'

export const Login = () => {
    const history = useHistory();
    const [data, setData] = useState({
        username: "",
        password: ""
    })

    function submit(e) {
        e.preventDefault();
        fetch('/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if(data["error"]){alert(data["error"]);}
                else{
                sessionStorage.setItem("token",data["token"])
                history.push("/info");
                }
            });

    }

    function handle(e) {
        const newData = { ...data };
        newData[e.target.id] =e.target.value;
        setData(newData);
    }
    return (
<div className={classes.login}>
<img src={login_img} alt="login.png"/>

        <div className={classes.login_form}>
        <h1>Login</h1>
            
            <form onSubmit={(e) => submit(e)} action="/info" method="post">
                <input type="text" onChange={(e) => handle(e)} placeholder="Enter Username" id="username" value={data.username} name="username" required />

                <input type="password" onChange={(e) => handle(e)} placeholder="Enter Password" id="password" value={data.password} name="password" required />
                <Link to="/forgot_password">Forgot password ?</Link>
                <button type="submit">Login</button>

            </form>
        </div>
        </div>
    )
}
