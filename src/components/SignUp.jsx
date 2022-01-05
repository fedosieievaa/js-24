import { Link } from "react-router-dom";
import Logo from "../assets/img/padlock.png";


export const SignUp = () => {
    
    return(
        <div className="container">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <h2 className="title">Sign up</h2>
            <form className="form" action="#">
                <div className="form_name">
                    <input className="form_input_sm" type="text" placeholder="First Name *"/>
                    <input className="form_input_sm" type="text" placeholder="Last Name *"/>
                </div>
                <input className="form_input" type="email" placeholder="Email Address *"/>
                <input className="form_input" type="password" placeholder="Password *"/>
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