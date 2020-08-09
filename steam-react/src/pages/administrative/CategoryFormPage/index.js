import React from 'react';

import {Button, Container, Row, Col, Form } from 'react-bootstrap'

import Header from '../../../components/Header';

import { withRouter } from "react-router";

import { Content} from './css'

import {create} from '../../../services/categoryService'

class CategoryFormPage extends React.Component {

    constructor(props, match) {
        super(props);
        this.state = {
            name : ''
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.id)
    }

    onChange = ( e )=>{
        e.persist()
        this.setState({ [e.target.name] : e.target.value })
    }

    submitForm = () =>{
        console.log(this.state)

        const category = {
            name : this.state.name
        }

        create(category).then(response => {
            console.log(category)
        })
    }

    render() {
        return (
            <Content>
                <Header/>
                <Container>   
                    <Row>
                        <Col>                        
                        <Form>
                            <Form.Group controlId="fgName" >
                                <Form.Label>Nome</Form.Label>
                                <Form.Control name="name"  placeholder="Digite o nome" onChange={this.onChange} value={this.state.name} />
                            </Form.Group>

                            <Button variant="primary" type="button" onClick={this.submitForm}>
                                Salvar
                            </Button>
                        </Form>
                        </Col>     
                    </Row>
                </Container>
            </Content>
        )
    }
}

export default withRouter(CategoryFormPage)