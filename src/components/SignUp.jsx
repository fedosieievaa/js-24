import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/padlock.png";
import styled from "styled-components";


export const SignUp = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const nameValidator  = /^[A-Za-z]{3,}$/;
    const mailValidator = /^[.\S]{3,}@[A-Za-z]{2,}\.[A-Za-z]{2,}/;
    const passwordValidator = /(?=.*[a-z])(?=.*[A-Z])\S{8,}/;

    const getUser = (e) => {
        e.preventDefault();
        if(name.match(nameValidator) && lastname.match(nameValidator) && email.match(mailValidator) && password.match(passwordValidator)){
            localStorage.setItem("name", name);
            localStorage.setItem("lastname", lastname);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
        } else{
            alert(`
            Name and lastname must be at least 3 characters long.
            The password must be at least 8 characters, uppercase
            and lowercase.
            Email must contain minimum 3 characters, @, minimum 
            2 characters, period and minimum 2 characters.`);
        }
        setName("");
        setLastname("");
        setEmail("");
        setPassword("");
    }

    const Input = styled.input`
        width: 97%;
        display: block;
        height: 50px;
        margin: 0 0 20px 0;
        padding: 0 0 0 10px;
        background: transparent;
        color: rgb(248, 207, 222);
        border-style: none;
        border-radius: 3px;
        font-size: 16px;
        outline: none;
        cursor: pointer;
        border: 1px solid;
        border: 1px solid grey;
        border-color: ${props => {
            switch(props.border){
                case "green":
                    return "green";
                case "red":
                    return "red";
                case "":
                    return "grey";
                default:
                    return;
            }
        } };`;
    
    const InputSM = styled.input`
        width: 45%;
        height: 50px;
        margin: 0 0 20px 0;
        padding: 0 0 0 10px;
        background: transparent;
        color: rgb(248, 207, 222);
        border-style: none;
        border-radius: 3px;
        font-size: 16px;
        outline: none;
        cursor: pointer;
        border: 1px solid grey;
        border-color: ${props => {
            switch(props.border){
                case "green":
                    return "green";
                case "red":
                    return "red";
                case "":
                    return "grey";
                default:
                    return;
            }
        } };`;

    return(
        <div className="container">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <h2 className="title">Sign up</h2>
            <form className="form" action="#" onSubmit={getUser}>
                <div className="form_name">
                    <InputSM border={name === "" ? "grey" : name.match(nameValidator) ? "green" : "red"} type="text" placeholder="First Name *" value={name} onChange={(e)=>setName(e.target.value)} required/>
                    <InputSM border={lastname === "" ? "grey" : lastname.match(nameValidator) ? "green" : "red"} type="text" placeholder="Last Name *" value={lastname} onChange={(e)=>setLastname(e.target.value)} required/>
                </div>
                <Input border={email === "" ? "grey" : email.match(mailValidator) ? "green" : "red"} type="email" placeholder="Email Address *" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <Input border={password === "" ? "grey" : password.match(passwordValidator) ? "green" : "red"} type="password" placeholder="Password *" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
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