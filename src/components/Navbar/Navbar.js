import './Navbar.css';
import ScriptTag from 'react-script-tag';
import React from 'react';
import logo from '../../Assets/images/logo.svg';
import UNI from '../../Assets/images/UNI.svg';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />

const Component = React.Component;
export default class Navigation extends Component {
    render() {
        return (
            <div className="sticky-top">
            <nav>
            <ScriptTag type="text/javascript" src="https://kit.fontawesome.com/a076d05399.js" />
            <div className="menu">
            <input type="checkbox" id="check" />
                <div className="logo"><img alt="UNI" src={logo}></img><img alt="UNI" src={UNI}></img></div>
                <ul><label className="button cancel" for="check"><i className="fas fa-times"></i></label>
                <li><a href="/about">Need any help?</a></li>
                <li><a href="/about">  <i className="fas fa-comments fa-lg" style={{color:"#4AAB96", marginRight:6}}> </i>Chat</a></li>
                <li><a href="/about"> <i className="fas fa-phone-alt fa-lg" style={{color:"#4AAB96",marginRight: 2   ,rotate:"50deg"}}> </i>Call us</a></li>
                </ul>
                <label className="button bars" for="check"><i className="fas fa-bars"></i></label>       
            </div>
            </nav>
            </div>
		);
	}
}