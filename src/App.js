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
      clickedItem: {},
      isEditing: false,
      modalClass: 'modal noDisplay'
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

  handleEditClick(event) {
    event.preventDefault();
    if (this.state.isEditing === false) {
      this.setState({
        isEditing: true,
        modalClass: 'modal'
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
          isEditing={this.state.isEditing}
          modalClass={this.state.modalClass}
          handleTargetClick={this.handleTargetClick.bind(this)}
          handleEditClick={this.handleEditClick.bind(this)}
        />
      </div>
    );
  }
}
