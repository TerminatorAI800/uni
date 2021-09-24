import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './docs.css';
import Card from '../DocCard/card.js';

const Component = React.Component;
export default class DocCollection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            documents: [{ id: 1, title: 'Address Proof', description: 'An suas viderer pro. Vis cu magna altera, ex his vivendo a' },
            { id: 2, title: 'License', description: 'An suas viderer pro. Vis cu magna altera, ex his vivendo a' },
            { id: 3, title: 'ID card', description: 'An suas viderer pro. Vis cu magna altera, ex his vivendo a' },
            { id: 4, title: 'Passport',description: 'An suas viderer pro. Vis cu magna altera, ex his vivendo a'  }]
        };
    }



    render() {
        return (
            <Container fluid>
                <Row >
                    <Col className="content">
                        <Row>
                            <h>Documentation Theme on Blockchain</h>
                        </Row>
                        <Row>
                            <h4> An suas viderer pro. Vis cu magna altera, ex his vivendo atomorum. An\\\  suas viderer pro. Vis cu magna altera, ex his vivendo atomorum.</h4>
                        </Row>
                        
                            <form id="form" role="search">
                                <input type="search" id="query" name="q"
                                    placeholder="Search Here for the docs"
                                    aria-label="Search through site content"></input>
                                    <button>Search Now</button>
                            </form>
                            <Row className="inner-content">
                                <Col lg={3} md={4} s={6} xs={12} className="inner-content">
                                <Card documents={this.state.documents.filter((document)=> document.id%4 === 3)}></Card>
                                </Col>
                                <Col lg={3} md={4} s={6} xs={12} className="inner-content">
                                <Card documents={this.state.documents.filter((document)=> document.id%4 === 2)}></Card>
                                </Col>
                                <Col lg={3} md={4} s={6} xs={12} className="inner-content">
                                <Card documents={this.state.documents.filter((document)=> document.id%4 === 1)}></Card>
                                </Col>
                                <Col lg={3} md={4} s={6} xs={12} className="inner-content">
                                <Card documents={this.state.documents.filter((document)=> document.id%4 === 0)}></Card>
                                </Col>
                            </Row>
                    </Col>
                    </Row>
            </Container>
        )
    }
}