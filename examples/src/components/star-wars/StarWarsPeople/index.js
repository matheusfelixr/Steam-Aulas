import React, { Component } from 'react';
import { findById } from '../../../services/StarWarsService'
import MyInputText from '../../MyInputText';
import { Btn } from './css'
import { Container } from './css'

class StarWarsPeople extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            person: "",
            personId: "",
            validateInputTextPersonId: "",
            isValidateInputPersonId: false

        }
    }

    submit = () => {
        if (!this.state.personId || !this.state.personId === '') {
            this.setState({ validateInputTextPersonId: "E necessário preencher o campo Id Pessoa!", isValidateInputPersonId: true })
            return;
        }

        findById(this.state.personId).then(res => res.json().then(
            res => this.setState({ person: res })
        )).catch(err => {
            throw err;
        });
    }

    onChange = (e) => {
        e.persist()
        this.setState({ [e.target.name]: e.target.value })
        this.setState({ isValidateInputPersonId: false })
    }
    imc = () => {
        var peso = this.state.person.mass;
        var altura = this.state.person.height;
        altura= altura/100;
        var imc = peso/(altura*altura);
        return imc.toFixed(2);
    }

    render() {
        return (
            <Container>
                <MyInputText label="Id da pessoa" name="personId" value={this.state.personId} onChange={this.onChange} validateInputText={this.state.validateInputTextPersonId} isValidateInput={this.state.isValidateInputPersonId} />
                <Btn type="button" onClick={this.submit}>Buscar</Btn>
                {this.state.person != "" && <div>
                    <div>
                        <span>Nome: {this.state.person.name}</span>
                    </div>
                    <div>
                        <span>Altura: {this.state.person.height}</span>
                    </div>
                    <div>
                        <span>Massa: {this.state.person.mass}</span>
                    </div>
                    <div>
                        <span>Genero: {this.state.person.gender}</span>
                    </div>
                    <div>
                        <span>IMC: {this.imc()} </span>
                    </div>
                </div>}
            </Container>
        );
    }
}

export default StarWarsPeople;