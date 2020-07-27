import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'

import { Img } from './css'
import { ImgLogo } from './css'

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Navbar bg="light" variant="light">
                    {/* <Navbar.Brand href="/"><ImgLogo src={require('../../img/logoMaster.png')} /></Navbar.Brand> */}
                    <Nav className="mr-auto">
                    <Dropdown>alignRight
                            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                            Loja
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="">Opa Opa</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                    <div className="mr-sm-2">
                      <span></span>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;