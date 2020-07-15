import React, { Component } from 'react';
import StarWarsPeople from '../../components/star-wars/StarWarsPeople';
import Header from '../../components/Header';

class StarWarsPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
        
    }

    render() {
        return (
            <div>
                <Header/>
                <StarWarsPeople></StarWarsPeople>
            </div>
        );
    }
}

export default StarWarsPage;