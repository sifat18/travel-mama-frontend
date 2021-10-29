import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './footer.css'
import footImg from '../../images/icons8-campsite-96.png'
import facebook from '../../images/icons8-facebook-96.png'
import insta from '../../images/icons8-instagram-48.png'
import tweet from '../../images/icons8-stack-of-tweets-48.png'

const Footer = () => {
    return (
        <Container fluid className='footer  ps-5'>
            <Row className='mt-5 pt-5'>
                <Col xs={12} md={4} className='social ps-5'>
                    <img src={footImg} alt="" height='150' width='150' />
                </Col>
                <Col xs={12} md={6}>
                    <Row >
                        <Col xs={12} md={6} className='mb-5'>
                            <p>About us</p>
                            <p>Our Services</p>
                            <p>Cell:+880-129423954</p>
                        </Col>
                        <Col xs={12} md={6} className='d-flex flex-column align-items-center justify-content-center'>
                            <p>Follow us at</p>
                            <div className='d-flex justify-content-center mt-2'>
                                <img src={facebook} alt="" height='50' width='50' />
                                <img src={insta} alt="" height='50' width='50' />
                                <img src={tweet} alt="" height='50' width='50' />
                            </div>
                        </Col>
                    </Row>
                </Col>

            </Row>

        </Container>
    );
};

export default Footer;