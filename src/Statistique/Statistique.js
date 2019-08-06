import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './Statistique.css';

const Statistique = ()=>{
    return (
        <Container fluid={true} id="statistique">
            <Container>
                <Row>
                    <Col lg={6}>
                        <h1 class="green">The world's biggest healthcare platform</h1>
                        <p class="gray small">We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries. </p>  
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <Col md={6}>
                                <div class="stat text-center">
                                    <img src="https://www.docplanner.com/img/flag.png" alt="Flag"/>
                                    <h3 class="green">Leader in 10 countries</h3>
                                    <p class="gray small"> Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile</p>
                                </div>
                                <div class="stat text-center">
                                    <img src="https://www.docplanner.com/img/patients.png" alt="Social"/>
                                    <h3 class="green">30 million unique patients</h3>
                                    <p class="gray small">visit us every month </p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div class="stat text-center">
                                    <img src="https://www.docplanner.com/img/visits.png" alt="Success"/>
                                    <h3 class="green">1.5 million appointments</h3>
                                    <p class="gray small">booked last month</p>
                                </div>
                                <div class="stat text-center">
                                    <img src="https://www.docplanner.com/img/doctors.png" alt="Group"/>
                                    <h3 class="green">2 million active doctors</h3>
                                    <p class="gray small">trust in our solutions</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Statistique;