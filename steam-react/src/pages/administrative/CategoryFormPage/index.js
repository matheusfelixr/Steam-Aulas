import React from 'react';

import {Button, Container, Row, Col, Form } from 'react-bootstrap'

import Header from '../../../components/Header';

import { withRouter } from "react-router";

import { Content} from './css'

import {create} from '../../../services/categoryService'

import {update} from '../../../services/categoryService'

import {findById} from '../../../services/categoryService'


class CategoryFormPage extends React.Component {

    constructor(props, match) {
        super(props);
        this.state = {
            name:"",
            id:"",
            category : {
                id:"",
                name : ""
            },
            isEditing: false
        }
    }

    componentDidMount(){
        if(this.props.match.params.id){
            this.setState({isEditing : true})
            findById(this.props.match.params.id).then(response => {
                this.setState({ category : response, id: response.id, name: response.name })
            })
        }
    }

    onChange = ( e )=>{
        e.persist()
        this.setState({ [e.target.name] : e.target.value })
    }

    submitForm = () =>{
        
        this.state.category.name =  this.state.name

        if(!this.state.isEditing){
            create(this.state.category).then(response => {
                console.log(response)
            })
        }else{
            update(this.state.category).then(response => {
                console.log(response)
            })
        }

    }

    render() {
        return (
            <Content>
                <Header/>
                <Container>   
                    <Row>
                        <Col>                        
                        <Form>
                        <Form.Group controlId="fgId" >
                                <Form.Label>Id</Form.Label>
                                <Form.Control disabled name="id" onChange={this.onChange} value={this.state.id} />
                            </Form.Group>
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