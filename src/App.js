import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.scss';
const companies = require('./mockData.json');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targets: companies.data,
      isClicked: false,
      clickedItem: {}
    };
  }

  componentDidMount() {
    console.log(companies);
  }

  handleTargetClick(item, index) {
    if (this.state.isClicked === true && this.state.clickedItem !== item) {
      this.setState({
        clickedItem: item
      });
    } else {
      this.setState({
        isClicked: !this.state.isClicked,
        clickedItem: item
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main
          clickedItem={this.state.clickedItem}
          isClicked={this.state.isClicked}
          targets={this.state.targets}
          handleTargetClick={this.handleTargetClick.bind(this)}
        />
      </div>
    );
  }
}
