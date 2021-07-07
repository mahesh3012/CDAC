import React from 'react'
import classes from './ChangePassword.module.css'
import change_password from '../images/change_password.png'

export const ChangePassword = () => {
    function submit(e) {
        e.preventDefault();
        let password = document.getElementById("password").value;
        let confirm_password = document.getElementById("confirm_password").value;
        let OTP = document.getElementById("OTP").value;
        if (password != confirm_password) { alert("Confirm Password field does not match with Password") }
        else {
            let data = { "otp": OTP, "password": password };
            fetch('http://localhost:5000/changepassword', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => res.json())
                .then(data => {
                    if (data["error"]) {
                        alert(data["error"]);
                    }
                    else if (data["success"]) {
                        alert(data["success"])
                    }
                }
                )
        }
    }
    return (<>
        <h1>Change Password</h1>
        <div className={classes.container}>
        <img src={change_password} alt="change_password.png"/>
        <form method="post" onSubmit={(e) => submit(e)} className={classes.ChangePassword}>
            <input type="password" placeholder="Enter New Password" id="password" className={classes.Password} required></input>
            <input type="password" placeholder="Confirm Password" id="confirm_password" className={classes.Password} required></input>
            <label htmlFor="OTP">Enter the 6-digit code sent on your registered email:</label>
            <input type="text" placeholder="OTP" name="OTP" id="OTP" className={classes.OTP} required></input>
            <button type="submit">Submit</button>
        </form>
        </div>
    </>
    )
}
