import React from 'react'
import { Redirect } from "react-router-dom";

import MyInputText from '../../components/MyInputText';
import {authenticate} from '../../services/AuthenticationService'

import {LoginContainer} from './css'
import {LimitLoginContainer} from './css'
import {ImgContainer} from './css'
import {BtnContainer} from './css'
import {Btn} from './css'

class LoginPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            password: "",
            validateInputTextUser: "",
            isValidateInputUser: false,
            validateInputTextPassword: "",
            isValidateInputPassword: false,
            logged : false

        }

        this.onChange = this.onChange.bind(this)
        this.submit = this.submit.bind(this)        
        
    }

    onChange(e) {
        e.persist()
        this.setState({ [e.target.name]: e.target.value })
        this.setState({ isValidateInputUser: false, isValidateInputPassword: false })
    }

    submit() {
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
            <div >
                {localStorage.getItem("token") && this.setState({logged:true})}
                <form>
                    <LoginContainer>
                        <LimitLoginContainer>
                            <ImgContainer>
                                <img src={require('../../img/logoMasterRemoveBorder.png')}/>
                            </ImgContainer>
                            <MyInputText label="Usuário" name="userName" value={this.state.userName} onChange={this.onChange} validateInputText={this.state.validateInputTextUser} isValidateInput={this.state.isValidateInputUser} />
                            <MyInputText label="Senha" name="password" value={this.state.password} onChange={this.onChange} validateInputText={this.state.validateInputTextPassword} isValidateInput={this.state.isValidateInputPassword} />
                            <BtnContainer>
                                <Btn  type="button" onClick={this.submit}>Entrar</Btn>
                            </BtnContainer>
                        </LimitLoginContainer>
                    </LoginContainer>
                </form>
                {this.state.logged&&<Redirect to={{ pathname : '/', state:{ from: this.props.location } }} />}
            </div>
        );
    }
}

export default LoginPage;