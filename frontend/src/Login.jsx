import React,{useState,useEffect} from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
function Login()
{
    const Navigate = useNavigate();
    const [name,setName]= useState("");
    const [password,setPassword] = useState("");
    const displayData = () =>
    {
        setName(document.getElementById("username").value);
        setPassword(document.getElementById("password").value);
        Navigate("/toDoList")
    }
    
    const goToRegistor = () => {
        Navigate("/registor");
    };

    return (
        <div className="login-form">
            <h1>Login form</h1>
            <label htmlFor="username"><b>USERNAME : </b></label>
            <input type="text" name="username" id="username"/><br />
            <br />
            <label htmlFor="password"><b>PASSWORD : </b></label>
            <input type="password" name="password" id="password"/><br />
            <br />
            <button onClick={displayData}><b>LOGIN</b></button>
            <br />
            <br />
            <button onClick={goToRegistor}><b>CREATE ACCOUNT</b></button>
        </div>
    )
}
export default Login