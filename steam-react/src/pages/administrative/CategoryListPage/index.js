import React from 'react';

import { Button, Container, Row, Col } from 'react-bootstrap'

import { Redirect } from "react-router-dom";

import { Content, CustomTable } from './css'

import Header from '../../../components/Header';

import { listAll } from '../../../services/categoryService'

import AlertInfo from '../../../components/AlertInfo';

export default class CategoryListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            redirectToForm: false,
            formUrl: '',
            alertTextHeading: "",
            alertTextBody: "",
            alertVariant: "",
            alertShow: false,
        }
    }

    componentDidMount() {
        listAll().then(response => {
            if (!response.status) {
                this.setState({ list: response })
            } else if (response.status == 500) {
                this.setState({ alertTextHeading: "Atenção", alertTextBody: response.message, alertShow: true, alertVariant: "danger" })
            } else {
                this.setState({ alertTextHeading: "Atenção", alertTextBody: "Erro inesperado ao tentar buscar a categoria pelo id", alertShow: true, alertVariant: "danger" })
            }

        }).catch((error) => {
            alert(error)
        });
    }

    goToFormPage = (category) => {
        if (category) {
            this.setState({ redirectToForm: true, formUrl: `/category/edit/${category.id}` })
        } else {
            this.setState({ redirectToForm: true, formUrl: '/category/create' })
        }
    }

    render() {
        return (
            <Content>
                <Header />
                <AlertInfo textHeading={this.state.alertTextHeading} textBody={this.state.alertTextBody} show={this.state.alertShow} variant={this.state.alertVariant} />
                <Container>
                    <Row>
                        <Col>
                            <Button onClick={() => this.goToFormPage()}>
                                Novo
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CustomTable striped bordered hover>
                                <thead>
                                    <tr>
                                        <th scope="col"> id </th>
                                        <th scope="col"> nome </th>
                                        <th scope="col"> # </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.list.map(e => {
                                        return (
                                            <tr key={e.id} scope="row">
                                                <td>{e.id}</td>
                                                <td>{e.name}</td>
                                                <td>
                                                    <Button onClick={() => this.goToFormPage(e)}>
                                                        Editar
                                                        </Button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </CustomTable>
                        </Col>
                    </Row>
                </Container>
                {this.state.redirectToForm && <Redirect to={{ pathname: this.state.formUrl, state: { from: this.props.location } }} />}
            </Content>
        )
    }
}