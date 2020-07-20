import React from 'react'
import { Redirect } from "react-router-dom";

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { LoginContainer } from './css'
import { LimitLoginContainer } from './css'
import {authenticate} from '../../services/AuthenticationService'

import ValidateInput from '../../components/ValidateInput'

class LoginPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            password: "",
            validateInputTextUser: "",
            validateInputTextPassword: "",
            logged : false
        }
    }

    onChange= (e) => {
        e.persist()
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value })
        this.setState({ validateInputTextUser: "", validateInputTextPassword: "" })
    }

    submit = () => {
        if((!this.state.userName || !this.state.userName === '' ) && (!this.state.password || !this.state.password === '' )){
            this.setState({ validateInputTextUser: "E necessário preencher o campo usuário!", isValidateInputUser: true })
            this.setState({ validateInputTextPassword: "E necessário preencher o campo senha!", isValidateInputPassword: true })
            return;
        }

        if(!this.state.userName || !this.state.userName === '' ){
            this.setState({ validateInputTextUser: "E necessário preencher o campo usuário!", isValidateInputUser: true })
            return;
        }

        if(!this.state.password || !this.state.password === '' ){
            this.setState({ validateInputTextPassword: "E necessário preencher o campo senha!", isValidateInputPassword: true })
            return;
        }
        let result = authenticate(
            {
              username : this.state.userName,
              password : this.state.password
            }
          )
      
          if(result){
            this.setState({logged:true});
            
          }else{
            this.setState({ validateInputTextPassword: "Usuário ou senha incorreto", isValidateInputPassword: true })
          }
    }

    render() {
        return (
            <Container>
                {localStorage.getItem("token") && this.setState({logged:true})}
                <LoginContainer>
                    <LimitLoginContainer>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Usuário</Form.Label>
                                <Form.Control type="text" placeholder="Usuário" name="userName" value={this.state.userName} onChange={this.onChange}/>
                                <ValidateInput text={this.state.validateInputTextUser}/>

                            </Form.Group>
                       
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Senha" name="password" value={this.state.password} onChange={this.onChange} />
                                <ValidateInput text={this.state.validateInputTextPassword}/>
                            </Form.Group>
                            <Button variant="primary" onClick={this.submit}>Entrar</Button>
                        </Form>
                    </LimitLoginContainer>
                </LoginContainer>
                {this.state.logged&&<Redirect to={{ pathname : '/', state:{ from: this.props.location } }} />}
            </Container>
        );
    }
}

export default LoginPage;