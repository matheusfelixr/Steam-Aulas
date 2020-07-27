import React from 'react'
import Header from '../../components/Header';
import Login from '../../components/Login';

class LoginPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

   
    render() {
        return (
           <div>
               <Header/>
               <Login/>
           </div>
        );
    }
}

export default LoginPage;