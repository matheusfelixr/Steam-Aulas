import React from 'react'

import Header from '../../components/Header';
import Login from '../../components/Login';

import { ContainerLogin } from './css'
class LoginPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <div>
                <Header />

                <ContainerLogin>
                    <Login />
                </ContainerLogin>

            </div>
        );
    }
}

export default LoginPage;