import React, { useState } from 'react'
import { useHistory,Link, Redirect } from "react-router-dom";
import classes from './Login.module.css'


export const Login = (props) => {
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
        



        <div class={classes.login}>
            <h2>Login</h2>
            <form onSubmit={(e) => submit(e)} action="/info" method="post">
                <input type="text" onChange={(e) => handle(e)} placeholder="Enter Username" id="username" value={data.username} name="username" required />

                <input type="password" onChange={(e) => handle(e)} placeholder="Enter Password" id="password" value={data.password} name="password" required />
                <a href="/">Forgot password ?</a>
                <button type="submit">Login</button>

            </form>
        </div>
    )
}
