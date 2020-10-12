import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Banner = () => (
    <section className="saas1 header" id="home">
        <div className="saas1-header bg header8-content">
            <Container>
                <Row>
                    <Col md="7">
                        <div className="center-text">
                            <div>
                                <div className="header-text">

                                </div>
                                <div className="header-sub-text">

                                </div>
                                <div className="header-sub-text">

                                </div>
                                <div className="link-horizontal">
                                    <ul>
                                        <li>
                                            <a className="btn btn-default primary-btn transparent">tont</a>
                                        </li>
                                        <li>
                                            <a className="btn btn-default primary-btn transparent">click here to die</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <div>
                        <div className="center-text slider-banner">
                            <img alt="slid-banner" src="/assets/images/saas1/boonk.gif" className="img-fluid"/>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
        <img alt="" className="img-fluid set-abs background" src="/assets/images/saas1/background2.png" />
    </section>
)

export default Banner;