import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/padlock.png";

export const SignIn = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [remember, setRemember] = useState("off");

    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    const getValid = (e) => {
        e.preventDefault();
        if(userEmail === email && userPassword === password){
            alert("SUCCESS: account login completed 🙂");
            setUserEmail("");
            setUserPassword("");
        }else{
            alert("FAILURE: wrong email or password 🤥");
        }

        if(remember === "on") {
            localStorage.setItem("userEmail", userEmail);
            localStorage.setItem("userPassword", userPassword);
        }

    }
    const func =() => {
        setUserEmail(localStorage.getItem("userEmail"));
        setUserPassword(localStorage.getItem("userPassword"));
    }

    useEffect(()=>func(),[])

    return(
        <div className="container">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <h2 className="title">Sign in</h2>
            <form  className="form" action="#" onSubmit={getValid}>
                <input className="form_input" type="email" placeholder="Email Address *" value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} required/>
                <input className="form_input" type="password" placeholder="Password *" value={userPassword} onChange={(e)=>setUserPassword(e.target.value)} required/>
                <div className="checkbox_container">
                    <input className="form_check" type="checkbox" id="remember" onChange={(e)=>setRemember(e.target.value)}/>
                    <label htmlFor="remember">Remember me</label>
                </div>
                <button className="btn__sign-in-up">SIGN IN</button>
            </form>
            <div className="container_link-signup">
                <a className="container_link" href="/">Forgot password?</a>
                <Link className="container_link" to="/signup">Don't have an account? Sign Up</Link>
            </div>
            <div className="copyright">Copyright &copy; Your Website 2022</div>
        </div>
    )
}