import React from 'react';
import'./index.css';
import {Link} from "react-router-dom";


const Header = () => {
    return(
            <header id="main-header">
                <Link to="/"> <img src={require('../../img/logoMaster.png')} /> </Link>
                <Link className="link"to="/star-wars"> <span>Star Wars</span> </Link>
                <Link className="link" to="/calculator"> <span>Calculadora</span> </Link>
            </header>
    )
}

export default Header ;