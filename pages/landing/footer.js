import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Footer = () => (
    <footer className="saas1 footer2">
        <Container>
            <Row>
                <Col md="3">
                    <div className="logo-sec">
                        <div className="footer-title mobile-title">
                            <h3 className="text-white">About Us</h3>
                        </div>
                        <div className="footer-contant">
                            <img alt="" className="img-fluid footer-logo" src="/assets/images/logo/erkylogo.png" />
                            <div className="footer-para">
                                <h6 className="text-white para-address">HQ</h6>
                                <h6 className="text-white para-address">Võidujooksu 1</h6>
                                <h6 className="text-white para-address">Tallinn, 13628.</h6>
                            </div>
                            <ul className="d-d-flex footer-social social">
                                <li className="footer-social-list">
                                    <a href="https://twitter.com/asdfgxywg/status/1285219410542764033"><i aria-hidden="true" className="fa fa-twitter"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col md="3">
                    <div className="footer-title mobile-title">
                        <h3 className="text-white">services</h3>
                    </div>
                    <div className="footer-contant">
                        <h5 className="footer-headings">services</h5>
                        <div>
                            <ul className="footer-lists">
                                <li><a href="#">Plug Service</a></li>
                                <li><a href="#">Bench Press Spotting</a></li>
                                <li><a href="#">Faceit Boosting</a></li>
                                <li><a href="#">Software Development</a></li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col md="3">
                    <div className="footer-title mobile-title">
                        <h3 className="text-white">brand</h3>
                    </div>
                    <div className="footer-contant">
                        <h5 className="footer-headings">brand</h5>
                        <div>
                            <ul className="footer-lists">
                                <li><a href="#">LESGEDI</a></li>
                                <li><a href="#">IPF</a></li>
                                <li><a href="#">Metro Capital</a></li>
                                <li><a href="#">Dog Soul</a></li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col md="3">
                    <div className="footer-title mobile-title">
                        <h3 className="text-white">Support</h3>
                    </div>
                    <div className="footer-contant">
                        <h5 className="footer-headings">Support</h5>
                        <div>
                            <ul className="footer-lists">
                                <li><a href="#">For Freelancers</a></li>
                                <li><a href="#">For Companies</a></li>
                                <li><a href="#">For Business</a></li>
                                <li><a href="#">General Help</a></li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
)

export default Footer;