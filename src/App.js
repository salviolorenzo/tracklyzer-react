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
      modalClass: 'modal noDisplay',
      modalFormClass: 'editForm initialPosition',
      formValues: {
        company_name: '',
        status: '',
        company_phone_number: '',
        company_address: '',
        main_contact_name: '',
        main_contact_phone: '',
        main_contact_email: '',
        secondary_contact_name: '',
        secondary_contact_phone: '',
        secondary_contact_email: ''
      }
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
        formValues: {
          company_name: this.state.clickedItem.company_name,
          status: this.state.clickedItem.status,
          company_phone_number: this.state.clickedItem.company_phone_number,
          company_address: this.state.clickedItem.company_address,
          main_contact_name: this.state.clickedItem.main_contact_name,
          main_contact_phone: this.state.clickedItem.main_contact_phone,
          main_contact_email: this.state.clickedItem.main_contact_email,
          secondary_contact_name: this.state.clickedItem.secondary_contact_name,
          secondary_contact_phone: this.state.clickedItem
            .secondary_contact_phone,
          secondary_contact_email: this.state.clickedItem
            .secondary_contact_email
        },
        modalClass: 'modal',
        modalFormClass: 'editForm'
      });
    }
  }

  handleEditSubmit(event) {
    event.preventDefault();
    console.log(event.target);
  }

  closeModal() {
    this.setState({
      isEditing: false,
      modalClass: 'modal noDisplay',
      modalFormClass: 'editForm initialPosition'
    });
  }

  handleInputChange(event) {
    console.log(event.target.value);
    this.setState({
      formValues: {
        [event.target.name]: event.target.value
      }
    });
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
          modalFormClass={this.state.modalFormClass}
          handleTargetClick={this.handleTargetClick.bind(this)}
          handleEditClick={this.handleEditClick.bind(this)}
          closeModal={this.closeModal.bind(this)}
          formValues={this.state.formValues}
          handleInputChange={this.handleInputChange.bind(this)}
          handleEditSubmit={this.handleEditSubmit.bind(this)}
        />
      </div>
    );
  }
}
