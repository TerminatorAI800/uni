import './login.css';
import React from 'react';
import fb from '../../Assets/images/fb.svg';
import twitter from '../../Assets/images/twitter.svg';
import google from '../../Assets/images/google.svg';


class SignForm extends React.Component {

    constructor() {
        super()
        this.state = {
            inputErrors: false
        }
    }


    handleChange = (event) => {
        const passwordRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
        this.setState({ inputErrors: !event.target.value.match(passwordRegex) });
    }

    render() {
        return (
            <form className="m-login-form">
                <h3>Introducing <b>Uni</b></h3>
                <div className="icons-container">
                    <div className="icon"><img alt="facebook" src={fb} ></img></div>
                    <div className="icon"><img alt="twitter" src={twitter}></img></div>
                    <div className="icon"><img alt="google" src={google}></img></div>
                </div>
                <input type="text" placeholder="  Username" />
                <input type="email" placeholder="  Email" />
                <input onChange={this.handleChange} type="password" placeholder="  Password" />
                {/* <span className={this.state.inputErrors === true ? "show-error" : ""}>
                    Please make sure your password contains a letter, number and a special character.
                </span> */}
                <input type="submit" value="Register" />
                <h5 onClick = {()=>{this.props.handleStateChange('login')}}> Already have an account? <div className="clickable"> Log in</div></h5>
            </form>
        )
    }
}
export default SignForm
