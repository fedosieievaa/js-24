import { Link } from "react-router-dom";
import Logo from "../assets/img/padlock.png";

export const SignIn = () => {
    
    return(
        <div className="container">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <h2 className="title">Sign in</h2>
            <form  className="form" action="#">
                <input className="form_input" type="email" placeholder="Email Address *"/>
                <input className="form_input" type="password" placeholder="Password *"/>
                <div className="checkbox_container">
                    <input className="form_check" type="checkbox"  id="remember"/>
                    <label htmlFor="remember">Remember me</label>
                </div>
                <button className="btn__sign-in-up">SIGN UP</button>
            </form>
            <div className="container_link-signup">
                <a className="container_link" href="/">Forgot password?</a>
                <Link className="container_link" to="/signup">Don't have an account? Sign Up</Link>
            </div>
            <div className="copyright">Copyright &copy; Your Website 2022</div>
        </div>
    )
}