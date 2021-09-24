import React, { Component } from 'react';
import './home.css';
import LoginForm from '../Login/login';
import SignUp from '../Login/signup';
// import card from '../../Assets/images/card.svg';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>

export default class Home extends Component {
    constructor() {
        super();
        this.handleStateChange = this.handleStateChange.bind(this);
    }


    state = {
        name: 'login',
    };
    handleStateChange(value) {
        //event.preventDefault();
        let name = this.state.name;
        name = value;
        this.setState({ name: name })
    }
    render() {
        return (
            <Container fluid className="contain">
                <Row >
                    <Col md={12} xs={12} s={12} lg={6}>
                        <div className="center-div">
                            {this.state.name === 'login' ? <LoginForm handleStateChange={this.handleStateChange} ></LoginForm> : <SignUp handleStateChange={this.handleStateChange} ></SignUp>}
                            {console.log(this.state.name)}
                        </div>
                    </Col>
                    <Col md={6} xs={12} s={12} lg={6}>
                        <div className="center-div">
                            {/* <img src={card} alt="card" width='40%' height='40%' align="center"></img> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}