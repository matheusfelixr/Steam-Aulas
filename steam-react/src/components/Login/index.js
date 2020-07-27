import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Login } from './css'

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Login>
                <Container>
                    <Row>
                        <Col>
                            <h5>INICIAR SESSÃO</h5>
                        </Col>
                        <Col>2 of 3 (wider)</Col>

                    </Row>
                    <Row>
                        <Col>1 of 3</Col>

                    </Row>
                </Container>
            </Login>
        );
    }
}

export default Header;