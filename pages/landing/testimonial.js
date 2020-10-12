import React, { useState } from 'react';
import Slider from 'react-slick';
import {  Modal, ModalHeader, ModalBody } from 'reactstrap';
import {Container,Row,Col} from 'reactstrap'
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    swipeToSlide: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const Testimonial = () => {
    const [modal, setModal] = useState();
    const toggle = () => {
        setModal(!modal)
    }
    return (
        <section className="saas1 testimonial videos testimonial-bg">
            <Container>
                <Row>
                    <Col md="12"  className="text-center">
                        <div className="title">
                            <div className="main-title">
                                <h2>
                                    Experts trust us
                                </h2>
                            </div>
                            <hr />
                            <div className="sub-title">
                                <p className="p-padding">text</p>
                            </div>
                        </div>
                    </Col>
                    <Col md="6" sm="12">
                        <div className="center-content">
                            <div className="video w-100">
                                <a className="button center-content" onClick={toggle}>
                                    <img alt="video" className="img-fluid" src="/assets/images/saas1/testimonial-video-icon.png" />
                                </a>
                                <Modal isOpen={modal} toggle={toggle} centered={true} size="lg">
                                    <ModalHeader toggle={toggle} className="modal-no-header close-up"></ModalHeader>
                                    <ModalBody className="iframe-modal">
                                        <iframe className="mfp-iframe" frameborder="0" allowfullscreen="" src="//www.youtube.com/embed/JPssCRYZvII?autoplay=1"></iframe>
                                    </ModalBody>
                                </Modal>
                            </div>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="testimonial-slider">
                            <Slider {...settings}>
                                <div className="item">
                                    <div className="testimonial">
                                        <div className="testimonial-box">
                                            <img alt="dot" src="/assets/images/saas1/testimonail-dot.png" />
                                            <h6>kuthroat is the best player in estonia and probably the next steve jobs</h6>
                                        </div>
                                    </div>
                                    <div className="testi-profile">
                                        <div className="media">
                                            <img alt="profile-testimonial"
                                                src="/assets/images/saas1/testi-profile.jpg" />
                                            <div className="media-body">
                                                <h5 className="mt-0">Aik 'paluu' Meltsa</h5>
                                                <h6>LESGEDI player</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial">
                                        <div className="testimonial-box">
                                            <img alt="dot" src="/assets/images/saas1/testimonail-dot.png" />
                                            <h6>fucking retarded kid</h6>
                                        </div>
                                    </div>
                                    <div className="testi-profile">
                                        <div className="media">
                                            <img alt="Generic placeholder image"
                                                src="/assets/images/saas1/navitimp.png" />
                                            <div className="media-body">
                                                <h5 className="mt-0">Timo 'dog ♿ NO SOUND' Kask</h5>
                                                <h6>Na'Vi Coach</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial">
                                        <div className="testimonial-box">
                                            <img alt="dot" src="/assets/images/saas1/testimonail-dot.png" />
                                            <h6>legend</h6>
                                        </div>
                                    </div>
                                    <div className="testi-profile">
                                        <div className="media">
                                            <img alt="profile" src="/assets/images/saas1/odablok.jpg" />
                                            <div className="media-body">
                                                <h5 className="mt-0">Odablock</h5>
                                                <h6>CEO of Sand Casino</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonial;