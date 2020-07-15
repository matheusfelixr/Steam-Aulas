import React from 'react';
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import {HeaderNav} from './css'
import {Img} from './css'
import {DivRight} from './css'
import {A} from './css'
import {SpanLink} from './css'
import {Name} from './css'


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
      <HeaderNav>
        <Link to="/"> <Img src={require('../../img/logoMaster.png')} /> </Link>

          <div>
            <Link to="/star-wars"> <SpanLink>Star Wars</SpanLink> </Link>
            <Link to="/calculator"> <SpanLink>Calculadora</SpanLink> </Link>
          </div>

          <DivRight>
            <Name>{localStorage.getItem("token")}</Name>
            <A onClick={this.submit}>Sair</A>
          </DivRight>

        {!this.state.logged && <Redirect to={{ pathname: '/', state: { from: this.props.location } }} />}
      </HeaderNav>
    );
  }
}

export default Header;