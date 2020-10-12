import React from 'react'
import Nav from './nav'
import { Container, Row, Col } from 'reactstrap'

const Header = props => {
    return (
        <header className={`${props.className} loading-header nav-abs custom-scroll  `}>
            <Container>
                <Row>
                    <Col>
                        <nav>
                            <a className="m-r-auto" href="#">
                                {
                                    <img alt="" className="img-fluid" src="/assets/images/logo/erkylogo.png" />
                                }
                            </a>
                            <Nav />
                        </nav>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header
