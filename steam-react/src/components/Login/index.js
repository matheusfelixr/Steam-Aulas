import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


import { LoginTrace } from './css'
import { Login } from './css'


class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            password: ""

        }
    }

    render() {
        return (
            <Container>
                <Login>
                    <Row>
                        <Col lg={4}>
                            <h2>INICIAR SESSÃO</h2>
                            <p>com uma conta Steam existente</p>

                            <Form>
                                <Form.Group controlId="formUserName">
                                    <Form.Label>Nome de usuário Steam</Form.Label>
                                    <Form.Control type="Text" name="userName" value={this.state.userName} onChange={this.onChange} />
                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control type="Text" name="password" value={this.state.password} onChange={this.onChange} />
                                </Form.Group>
                                <br />
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label=" Lembre-me neste computador" />
                                </Form.Group>
                                <br />
                            </Form>
                            <Button>Iniciar sessão</Button>
                        </Col>
                        <Col lg={1}>
                            <LoginTrace />
                        </Col>
                        <Col lg={3}>
                            <h2>CRIAR</h2>
                            <p>uma nova conta gratuita</p>
                            <p>O cadastro é gratuito e o programa é fácil de usar. Continue para criar a sua conta Steam e baixar o Steam, a melhor solução digital para jogos e softwares para PC, Mac e Linux.</p>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <Button>Cadastrar-se</Button>
                            <br />
                            <br />
                            <br />
                            <br />
                        </Col>
                    </Row>
                </Login>
            </Container>
        );
    }
}

export default Header;