import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import './App.scss';
const companies = require('./mockData.json');
const uuidv1 = require('uuid/v1');

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
      },
      isMobile: true
    };
  }

  componentDidMount() {
    this.resize();
    window.addEventListener('resize', this.resize.bind(this));
  }

  resize() {
    if (window.innerWidth > 600) {
      this.setState({
        isMobile: false
      });
    } else {
      this.setState({
        isMobile: true
      });
    }
  }

  handleTargetClick(item) {
    if (this.state.isClicked === true && this.state.clickedItem !== item) {
      this.setState({
        clickedItem: item
      });
    } else if (
      this.state.isClicked === true &&
      this.state.clickedItem === item
    ) {
    } else {
      this.setState({
        isClicked: !this.state.isClicked,
        clickedItem: item
      });
    }
  }

  handleTargetShrink(item) {
    this.setState({
      isClicked: !this.state.isClicked,
      clickedItem: {}
    });
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

  handleInputChange(event) {
    console.log(event.target.value);
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    });
  }

  handleNewItem(event) {
    event.preventDefault();
    this.setState({
      modalClass: 'modal',
      modalFormClass: 'editForm'
    });
    console.log(this.state.clickedItem);
  }

  handleSubmit(event) {
    event.preventDefault();
    let targets = this.state.targets;
    const editedItem = {
      id: this.state.isEditing ? this.state.clickedItem.id : uuidv1(), //normally this would be handled by the DB id incrementing. UUID is used in place of it for the front-end only assignment
      company_name: this.state.formValues.company_name,
      status: this.state.formValues.status,
      company_phone_number: this.state.formValues.company_phone_number,
      company_address: this.state.formValues.company_address,
      main_contact_name: this.state.formValues.main_contact_name,
      main_contact_phone: this.state.formValues.main_contact_phone,
      main_contact_email: this.state.formValues.main_contact_email,
      secondary_contact_name: this.state.formValues.secondary_contact_name,
      secondary_contact_phone: this.state.formValues.secondary_contact_phone,
      secondary_contact_email: this.state.formValues.secondary_contact_email
    };

    // using for-of rather than forEach so that break syntax can be employed
    for (let target of targets) {
      if (target.id === editedItem.id) {
        targets.splice(targets.indexOf(target), 1, editedItem);
      } else if (targets.indexOf(editedItem) === -1) {
        targets.push(editedItem);
        break;
      }
    }

    // targets.forEach(target => {
    //   if (target.id === editedItem.id) {
    //     targets.splice(targets.indexOf(target), 1, editedItem);
    //   } else {
    //     targets.push(editedItem);
    //   }
    // });

    this.setState(
      {
        targets: targets
      },
      this.closeModal()
    );
  }

  handleItemDelete(event) {
    event.preventDefault();
    let targets = this.state.targets;

    targets.forEach(target => {
      if (target.id === this.state.clickedItem.id) {
        targets.splice(targets.indexOf(target), 1);
      }
    });

    this.setState({
      targets: targets,
      clickedItem: {}
    });
  }

  closeModal() {
    this.setState({
      isEditing: false,
      clickedItem: {},
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
      },
      modalClass: 'modal noDisplay',
      modalFormClass: 'editForm initialPosition'
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header handleNewItem={this.handleNewItem.bind(this)} />
          <Main
            clickedItem={this.state.clickedItem}
            isClicked={this.state.isClicked}
            targets={this.state.targets}
            isEditing={this.state.isEditing}
            modalClass={this.state.modalClass}
            modalFormClass={this.state.modalFormClass}
            isMobile={this.state.isMobile}
            handleTargetClick={this.handleTargetClick.bind(this)}
            handleEditClick={this.handleEditClick.bind(this)}
            closeModal={this.closeModal.bind(this)}
            formValues={this.state.formValues}
            handleInputChange={this.handleInputChange.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}
            handleItemDelete={this.handleItemDelete.bind(this)}
            handleTargetShrink={this.handleTargetShrink.bind(this)}
          />
        </div>
      </Router>
    );
  }
}
