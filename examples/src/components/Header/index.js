import React from 'react';
import './index.css';
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";


class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      logged: true
    }
    this.submit = this.submit.bind(this)
  }

  submit() {
    localStorage.clear();
    this.setState({ logged: false });
  }

  render() {
    return (
      <header id="main-header">
        <Link to="/"> <img className="img" src={require('../../img/logoMaster.png')} /> </Link>

          <div className="left">
            <Link className="link" to="/star-wars"> <span>Star Wars</span> </Link>
            <Link className="link" to="/calculator"> <span>Calculadora</span> </Link>
          </div>

          <div className="right">
            <span className="right">{localStorage.getItem("token")}</span>
            <a className="pointer" onClick={this.submit}>Sair</a>
          </div>

        {!this.state.logged && <Redirect to={{ pathname: '/', state: { from: this.props.location } }} />}
      </header>
    );
  }
}

export default Header;