import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Registor ()
{
    const [errorMessage,setErrorMessage] = useState()
    const Navigate = useNavigate();
    const goToLogin = () =>
    {
        const n = document.getElementById("username").value;
        const p = document.getElementById("password").value;
        const e = document.getElementById("email").value;
        if((n.trim()!=="") && (p.trim()!=="") && (e.trim()!==""))
        Navigate("/");
        else
        {
            setErrorMessage("PLEASE FILL ALL THE DETAILS IN ORDER TO REGISTOR")
        }
        
    }
    return (
        <div>
            <h1>REGISTOR FORM</h1>
            <label htmlFor="username"><b>USERNAME : </b></label>
            <input type="text" name="username" id="username"/><br /><br />
            <label htmlFor="email"><b>E-MAIL : </b></label>
            <input type="email" name="email" id="email"/><br /><br />
            <label htmlFor="password"><b>PASSWORD : </b></label>
            <input type="password" name="password" id="password"/><br /><br />
            <button onClick={goToLogin}><b>REGISTOR</b></button><br /><br />
            <b>{errorMessage}</b>
        </div>
    )
}
export default Registor