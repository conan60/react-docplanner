import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './Hero.css';

const Hero = ()=>{
    return (
        <Container id="hero">
            <Row>
                <Col xs={12} className="text-center">
                    <img src="https://www.docplanner.com/img/sygnet.png" alt="Start"/>
                    <h1 class="green">Making the healthcare experience more human</h1>
                </Col>
                <Col md={6}>
                    <p className="gray"> We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere. </p>
                </Col>
                <Col md={6}>
                    <p className="gray">We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients. </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Hero;