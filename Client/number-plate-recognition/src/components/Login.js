import React, { useState } from 'react'
import { useHistory,Link } from "react-router-dom";
import classes from './Login.module.css'


export const Login = (props) => {
    const history = useHistory();
    const [data, setData] = useState({
        username: "",
        password: ""
    })


    //function to send uuid from child to parent
    function handle_uuid_here(newValue) {
        props.handle_uuid(newValue);
    }

    function handle_authorized_here(newValue) {
        props.handle_authorized(newValue);
    }

    function submit(e) {
        e.preventDefault();
        let encrypted_data={
            username: btoa(data.username),
            password: btoa(data.password)
        }
        console.log(encrypted_data);
        fetch('/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(encrypted_data)
        })
            .then(res => res.json())
            .then(data => {
                if (data !== "error") {
                    handle_uuid_here(data);
                    handle_authorized_here(true);
                    history.push("/info");
                }
                else {
                    history.push("/");
                    window.location.reload();
                    alert("invalid username or password");
                }
            });

    }

    function handle(e) {
        const newData = { ...data };
        newData[e.target.id] =e.target.value;
        setData(newData);
    }
    return (<div>
        {/*Header*/}
        <header className={classes.navbar}>

            <ul className={classes.left}>
                <li><strong>CDAC-Logo</strong></li>
                <Link to="/about"> <li>About</li></Link>
            </ul>

            <ul className={classes.right}>
                <Link to="/"><li>Log in</li></Link>
            </ul>
        </header>



        <div class={classes.login}>
            <h2>Login</h2>
            <form onSubmit={(e) => submit(e)} action="/info" method="post">
                <input type="text" onChange={(e) => handle(e)} placeholder="Enter Username" id="username" value={data.username} name="username" required />

                <input type="password" onChange={(e) => handle(e)} placeholder="Enter Password" id="password" value={data.password} name="password" required />
                <a href="/">Forgot password ?</a>
                <button type="submit">Login</button>

            </form>
        </div>
    </div>
    )
}
