import React from 'react'
import { Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import Row from 'react-bootstrap/Row'

import { NavStyle } from './css'
import { GlobalActionMenu } from './css'
import { Img } from './css'



class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <NavStyle>
                <Navbar bg="light" variant="light">
                    <Row>
                        <GlobalActionMenu className="mr-sm-2">
                            <Link to="/login">Iniciar sessão</Link>
                        </GlobalActionMenu>
                    </Row>
                    <Row>
                        <Nav className="mr-auto" >
                            <Navbar.Brand href="/">
                                <Img src="https://steamstore-a.akamaihd.net/public/shared/images/header/globalheader_logo.png?t=962016" /></Navbar.Brand>
                            <Dropdown>
                                <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                                    LOJA
                            </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="">Opa Opa</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                                    COMUNIDADE
                            </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="">Opa Opa</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                                    SOBRE
                            </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="">Opa Opa</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                                    SUPORTE
                            </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="">Opa Opa</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Row>
                </Navbar>
            </NavStyle>
        );
    }
}

export default Header;