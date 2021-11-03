import React from 'react';
import { Col, Row } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <Row>
            <Col sm={12} md={6}><img src="http://www.ecotourism.co.in/img/our_service_home/bangladesh-tour-packages.jpg" alt="" /></Col>
            <Col sm={12} md={6} className="p-5" style={{textAlign:"justify"}}>Q:
                What tours in Bangladesh are taking additional safety precautions?
                Ans:
                <ul>
                    <li>These Bangladesh experiences are providing additional COVID-19 safety measures.</li>
                <li>Private Tour: Bangkok's Grand Palace Complex and Wat Phra Kaew.</li>
                <li>6-Day Sundarban Tour from September to March.</li>
                <li>Glory Of Bangladesh Tour</li>
                <li>Private Tour: Sonargaon Day Tour including Country Boat Trip</li>
                <li>Private Full Day Dhaka City Tour</li>
                </ul>
                What tours in Bangladesh are good for avoiding crowds?
                Ans:
                <ul>
                <li>These hidden gems in Bangladesh may have limited interaction with crowds:</li>
                <li>Private Tour: Bangkok's Grand Palace Complex and Wat Phra Kaew</li>
                <li>Private Tour: Sonargaon Day Tour including Country Boat Trip</li>
                <li>Private Day Tour: Old Dhaka Photography</li>
                <li>Private Tour: Dhaka Full-Day City Sightseeing Tour</li>
                <li>Private Full Day Dhaka City Tour</li>
                </ul>
            </Col>
        </Row>
    );
};

export default AboutUs;