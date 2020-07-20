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

    submit = () => {
        localStorage.clear();
      }
    

    render() {
        return (
            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="/"><ImgLogo src={require('../../img/logoMaster.png')} /></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/star-wars">Star Wars</Nav.Link>
                    </Nav>
                    <div className="mr-sm-2">
                        <Dropdown>
                            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                                <Img src={require('../../img/user.png')} />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/login" onClick={this.submit}>Sair</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;