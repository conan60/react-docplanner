import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './Footer.css';

const Footer = ()=>{
    return (
            <Container className="text-center">
                <Row>
                    <Col xs={12} className="text-center">
                        <hr/>
                        <p class="gray small">We are leaders in 10 countries: 
                            <a href="/">Poland</a>, 
                            <a href="/">Turkey</a>, 
                            <a href="/">Spain</a>, 
                            <a href="/">Italy</a>, 
                            <a href="/">Czech Republic</a>, 
                            <a href="/">Mexico</a>, 
                            <a href="/">Colombia</a>, 
                            <a href="/">Brazil</a>, 
                            <a href="/">Argentina</a> and 
                            <a href="/">Chile</a>
                        </p>
                        <p class="gray small">
                            This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.<br/>
                            www.docplanner.com © 2019 
                        </p>
                    </Col>
                </Row>
            </Container>
    );
}

export default Footer;