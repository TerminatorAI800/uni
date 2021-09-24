import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import upload from '../../Assets/images/upload.svg';
import './Verification.css';
import DocCard from '../DocCard/docCard.js';


const Component = React.Component;
export default class Verification extends Component {

    constructor(props) {
        super(props);
        this.state ={ documents: [{id : 1 ,title : 'Address Proof', isPending : true},
                    {id : 2 ,title : 'License', isPending : false},
                    {id : 3 ,title : 'ID card', isPending : false},
                    {id : 4 ,title : 'Passport', isPending : true}]
                };
    }



    render() {
        return (
            <Container fluid>
                <Row >
                    <Col lg={8} md={12} s={12} xs={12} className="content">
                        <Row>
                            <h3> Upload Documents</h3>
                        </Row>
                        <Row>
                            <h4> To confirm who you are, please upload the digital photos of the following documents.</h4>
                        </Row>
                        <Row className="inner-content">
                            <Col lg={6} md={6} s={6} xs={12} className="inner-content">
                                <DocCard documents={this.state.documents.filter((document)=> document.id%2 === 1)}></DocCard>
                            </Col>
                            <Col lg={6} md={6} s={6} xs={12} className="inner-content">
                                <DocCard documents={this.state.documents.filter((document)=> document.id%2 === 0)}/>
                            </Col>
                        </Row>

                    </Col>
                    <Col lg={4} md={12} s={12} xs={12} className="side-image" >
                        <img src={upload} alt="upload"></img>
                    </Col>
                </Row>
            </Container>
        )
    }
}