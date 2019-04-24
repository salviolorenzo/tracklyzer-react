import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.scss';
const companies = require('./mockData.json');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targets: companies.data
    };
  }

  componentDidMount() {
    console.log(companies);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main targets={this.state.targets} />
      </div>
    );
  }
}
