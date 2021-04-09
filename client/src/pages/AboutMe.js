import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import Pic from "../images/Jacobs_Website_Banner_rev04_Solutions Intelligence.png"
import Car2 from "../images/000Jacobs0.26.jpg"
import Car3 from "../images/000Jacobs0.27.jpg"

function AboutMe() {

    return (
        <div className="fade-in">
            <Container className="aboutMeContainer">
                <Row>
                    <Col>
                        <header>
                            <h1>Predictive Analytics CoP</h1>
                        </header>
                    </Col>
                </Row>
                <div id="horizontal-line" />
                <Row>
                    <Col lg={6}>
                        <Carousel>
                            <Carousel.Item interval={3000}>
                                <img
                                    className="d-block w-100"
                                    src={Pic}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Predicitve Analytics</h3>
                                    <p>Use historical data to make future predictions</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <img
                                    className="d-block w-100"
                                    src={Car2}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3>Data Science</h3>
                                    <p>Identify risks and future opportunities</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Car3}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>AI/ML</h3>
                                    <p>Utilize AI/ML to drive decision-making process</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                    </Col>
                    <Col lg={6}>
                        <p>
                            Predictive Analytics CoP falls under Intelligent Systems umbrella.
                            It includes areas of Data Science, Visualization, Automation, Data Engineering and Analytics.
                            It overlaps with Machine Learning, IoT and Optimization.
                            Focuses on determining future values or probable future outcome for an event or a
                            likelihood of the situation ocurring based on the current and historical data.
                  </p>
                    </Col>
                </Row>

            </Container>
        </div>


    )
}

export default AboutMe;