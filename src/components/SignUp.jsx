import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/padlock.png";


export const SignUp = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const getUser = (e) => {
        e.preventDefault();
        localStorage.setItem("name", name);
        localStorage.setItem("lastname", lastname);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        setName("");
        setLastname("");
        setEmail("");
        setPassword("");
    }

    return(
        <div className="container">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <h2 className="title">Sign up</h2>
            <form className="form" action="#" onSubmit={getUser}>
                <div className="form_name">
                    <input className="form_input_sm" type="text" placeholder="First Name *" value={name} onChange={(e)=>setName(e.target.value)} required/>
                    <input className="form_input_sm" type="text" placeholder="Last Name *" value={lastname} onChange={(e)=>setLastname(e.target.value)} required/>
                </div>
                <input className="form_input" type="email" placeholder="Email Address *" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <input className="form_input" type="password" placeholder="Password *" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                <div className="checkbox_container">
                    <input className="form_check" type="checkbox"  id="remember"/>
                    <label htmlFor="remember">I want to receive inspiration, marketing promotions and updates via email.</label>
                </div>
                <button className="btn__sign-in-up">SIGN UP</button>
            </form>
            <Link className="container_link container_link-signin" to="/js-24/">Already have an account? Sign In</Link>
            <div className="copyright">Copyright &copy; Your Website 2022</div>
        </div>
    )
}