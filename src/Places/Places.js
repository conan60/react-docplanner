import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './Places.css';

const Places = ()=>{
    return (
            <Container id="places">
                <Row>
                    <Col xs={12} className="text-center">
                        <h2 class="green">
                            Improve the lives of millions.<br/>
                            Change yours forever 
                        </h2>
                        <p class="gray small">
                            More than 1000 team mates share our same vision, goals and passion.<br/>
                            With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and<br/>
                            Curitiba, our search for great talent never stops. 
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={6}>
                        <div class="ville">
                            <img src="https://www.docplanner.com/images/warsaw.png" alt=""/>
                            <div>
                                <p class="gray">Warsaw</p>
                                <button type="button" class="btn btn-primary btn-sm">See openings</button>
                            </div>
                        </div>     
                    </Col>
                    <Col lg={4} md={6}>
                        <div class="ville">
                            <img src="https://www.docplanner.com/images/barcelona.png" alt=""/>
                            <div>
                                <p class="gray">Barcelona</p>
                                <button type="button" class="btn btn-primary btn-sm">See openings</button>
                            </div>
                        </div>     
                    </Col>
                    <Col lg={4} md={6}>
                        <div class="ville">
                            <img src="https://www.docplanner.com/images/istanbul.png" alt=""/>
                            <div>
                                <p class="gray">Istanbul</p>
                                <button type="button" class="btn btn-primary btn-sm">See openings</button>
                            </div>
                        </div>     
                    </Col>
                    <Col lg={4} md={6}>
                        <div class="ville">
                            <img src="https://www.docplanner.com/images/rome.png" alt=""/>
                            <div>
                                <p class="gray">Rome</p>
                                <button type="button" class="btn btn-primary btn-sm">See openings</button>
                            </div>
                        </div>     
                    </Col>
                    <Col lg={4} md={6}>
                        <div class="ville">
                            <img src="https://www.docplanner.com/images/mexico-city.png" alt=""/>
                            <div>
                                <p class="gray">Mexico City</p>
                                <button type="button" class="btn btn-primary btn-sm">See openings</button>
                            </div>
                        </div>     
                    </Col>
                    <Col lg={4} md={6}>
                        <div class="ville">
                            <img src="https://www.docplanner.com/images/curitiba.png" alt=""/>
                            <div>
                                <p class="gray">Curitiba</p>
                                <button type="button" class="btn btn-primary btn-sm">See openings</button>
                            </div>
                        </div>     
                    </Col>
                </Row>
            </Container>
    );
}

export default Places;