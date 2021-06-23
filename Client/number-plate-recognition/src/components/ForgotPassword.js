import React from 'react'
import {useHistory
} from "react-router-dom";
import classes from './ForgotPassword.module.css'

export const ForgotPassword = () => {
const history=useHistory()
function submit(e){
    e.preventDefault();
    let data={"email":document.getElementById("e-mail").value};
    fetch('http://localhost:5000/getOTP', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data=>{
        if (data["error"]){alert(data["error"])}
        else if(data["success"]){history.push("/change_password")}
    })
}
    return (
       <form onSubmit={(e) => submit(e)} method="post" className={classes.ForgotPassword}>
           <label htmlFor="e-mail">Enter your registered email:</label><br/>
           <input type="e-mail" id="e-mail" name="e-mail" placeholder="registered e-mail" required></input>
            <button type="submit">Get OTP</button>
       </form>
    )
}
