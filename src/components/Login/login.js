import './login.css';
import React from 'react';
import fb from '../../Assets/images/fb.svg';
import twitter from '../../Assets/images/twitter.svg';
import google from '../../Assets/images/google.svg';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


class LoginForm extends React.Component {

    constructor() {
        super()
        this.state = {
            inputErrors: false
        }
    }



    render() {
        return (
            <form className="m-login-form">
                <h3>Welcome Back</h3>
                <div className="icons-container">
                    <div className="icon"><img alt="facebook" src={fb} ></img></div>
                    <div className="icon"><img alt="twitter" src={twitter}></img></div>
                    <div className="icon"><img alt="google" src={google}></img></div>
                </div>
                <input type="text" placeholder="  Username" />
                <input type="password" placeholder="  Password" />
                <input type="submit" value="Sign In" />
                <h5>Forget password?</h5>
                <h5 onClick={() => { this.props.handleStateChange('signup') }}><div className="clickable">New here? Create account</div></h5>
            </form>
        )
    }
}
export default LoginForm
