import React from 'react';

import { Button, Container, Row, Col, Form } from 'react-bootstrap'

import Header from '../../../components/Header';

import { withRouter } from "react-router";

import { Content } from './css'

import { update, findById, create } from '../../../services/categoryService'

import AlertInfo from '../../../components/AlertInfo';

class CategoryFormPage extends React.Component {

    constructor(props, match) {
        super(props);
        this.state = {
            name: "",
            id: "",
            category: {
                id: "",
                name: ""
            },
            isEditing: false,
            alertTextHeading:"",
            alertTextBody:"",
            alertVariant:"",
            alertShow:false,
            disabled:false,
  
        }
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.setState({ isEditing: true })

            findById(this.props.match.params.id).then(response => {
                console.log(response);

                if (!response.status) {
                    this.setState({ category: response, id: response.id, name: response.name })

                 } else if (response.status == 500) {
                    this.setState({ alertTextHeading: "Atenção", alertTextBody: response.message, alertShow: true, alertVariant:"danger" })
                 } else {
                     this.setState({ alertTextHeading: "Atenção", alertTextBody: "Erro inesperado ao tentar buscar a categoria pelo id", alertShow: true, alertVariant:"danger" })
                 }

            }).catch((error) => {
                alert(error)
            });
        }
    }

    onChange = (e) => {
        e.persist()
        this.setState({ [(e.target.name) ]: e.target.value })
    }

    submitForm = () => {

        if(this.state.category.name === ""){
            this.setState({ alertTextHeading: "Atenção", alertTextBody: "Não e possivel salvar um nome vazio", alertShow: true, alertVariant:"danger" })
        }
        this.state.category.name = this.state.name

        if (!this.state.isEditing) {
            create(this.state.category).then(response => {
                console.log(response)
                this.setState({ alertTextHeading: "Sucesso", alertTextBody: "Salvo com sucesso", alertShow: true, alertVariant:"success", disabled:true })
            })
        } else {
            update(this.state.category).then(response => {
                this.setState({ alertTextHeading: "Sucesso", alertTextBody: "Editado com sucesso", alertShow: true, alertVariant:"success", disabled:true})

                console.log(response)
            })
        }

    }

    render() {
        return (
            <Content>
                        <AlertInfo textHeading={this.state.alertTextHeading} textBody={this.state.alertTextBody} show={this.state.alertShow} variant={this.state.alertVariant}/>
                <Header />
                <Container>
                    <Row>
                        <Col>
                            <Form>
                                {this.state.isEditing &&
                                    <Form.Group controlId="fgId" >
                                        <Form.Label>Id</Form.Label>
                                        <Form.Control disabled name="id" onChange={this.onChange} value={this.state.id} />
                                    </Form.Group>}

                                <Form.Group controlId="fgName" >
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control disabled={this.state.disabled} name="name" placeholder="Digite o nome" onChange={this.onChange} value={this.state.name} />
                                </Form.Group>

                                <Button  disabled={this.state.disabled} variant="primary" type="button" onClick={this.submitForm}>
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