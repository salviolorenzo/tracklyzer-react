import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import Header from './components/Header';
import Main from './components/Main';
import './App.scss';
require('dotenv').config();

const companies = require('./mockData.json');
const uuidv1 = require('uuid/v1');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targets: [], // list of companies pulled from json
      sorting: '', // term for sorting companies,
      order: '', // determine order of sort
      isClicked: false, // event boolean for expanding/shrinking divs onclick
      clickedItem: {}, // which item to expand
      isEditing: false, // event boolean for form editing
      modalClass: 'modal noDisplay', // hides modal until state change
      modalFormClass: 'editForm initialPosition', // hides modal until state change

      // initializing form values for the modal
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

      // handle switch between swipeable and horizontal display in expanded divs
      isMobile: true,
      address: ''
    };
  }

  componentDidMount() {
    this.loadJS(process.env.REACT_APP_API_URL);
    this.resize();
    window.addEventListener('resize', this.resize.bind(this));
    let data = this.handleSort(companies.data);
    this.setState({
      targets: data
    });
  }

  // editing the target display type depending on screen size
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

  // set the order in which companies are displayed
  handleSort(array, sortBy = 'Alphabetical', order = 'Ascending') {
    let sortedArray;
    let key;
    const statusArray = [
      'Approved',
      'Pending Approval',
      'Researching',
      'Declined'
    ];
    switch (sortBy) {
      case 'Alphabetical':
        key = 'company_name';
        break;
      case 'Status':
        key = 'status';
        break;
      case 'Sort By':
        key = 'company_name';
        break;
      default:
        key = 'company_name';
        break;
    }
    let sortByArray = array.map(item => {
      return { id: item.id, param: item[key] };
    });

    if (sortBy === 'Alphabetical' || sortBy === 'Sort By') {
      sortByArray = sortByArray.map(item => {
        return item.param;
      });

      sortedArray = sortByArray.sort().map(item => {
        let target = '';
        array.forEach(object => {
          if (object.company_name === item) {
            target = object;
          }
        });
        return target;
      });
    } else if ((sortBy = 'Status')) {
      sortedArray = statusArray
        .map(status => {
          let objectArray = sortByArray.filter(item => item.param === status);
          return objectArray;
        })
        .flat();

      let target = '';
      sortedArray = sortedArray.map(item => {
        array.forEach(object => {
          if (object.id === item.id) {
            target = object;
          }
        });
        return target;
      });

      // sortedArray = [
      //   ...sortedArray1,
      //   ...sortedArray2,
      //   ...sortedArray3,
      //   ...sortedArray4
      // ];
    }
    sortedArray = order === 'Descending' ? sortedArray.reverse() : sortedArray;
    console.log(sortedArray);
    return sortedArray;
  }

  // determining which target should be expanded
  handleTargetClick(item) {
    if (this.state.isClicked && this.state.clickedItem !== item) {
      this.setState({
        clickedItem: item
      });
    } else if (this.state.isClicked && this.state.clickedItem === item) {
      return;
    } else {
      this.setState({
        isClicked: !this.state.isClicked,
        clickedItem: item
      });
    }
  }

  // shrink the expanded target on click
  handleTargetShrink(item) {
    this.setState({
      isClicked: !this.state.isClicked,
      clickedItem: {}
    });
  }

  // opening the modal and filling the form values to edit
  handleEditClick(event) {
    event.preventDefault();
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
        secondary_contact_phone: this.state.clickedItem.secondary_contact_phone,
        secondary_contact_email: this.state.clickedItem.secondary_contact_email
      },
      modalClass: 'modal',
      modalFormClass: 'editForm'
    });
  }

  // handle text change / google places api input
  handleInputChange(event) {
    console.log(event);
    if (typeof event === 'string') {
      this.setState({
        formValues: {
          ...this.state.formValues,
          company_address: event
        }
      });
    } else {
      this.setState({
        formValues: {
          ...this.state.formValues,
          [event.target.name]: event.target.value
        }
      });
    }
  }

  // open modal with blank form to add new target
  handleNewItem(event) {
    event.preventDefault();
    this.setState({
      modalClass: 'modal',
      modalFormClass: 'editForm'
    });
  }

  // save the item being edited
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
      secondary_contact_email: this.state.formValues.secondary_contact_email,
      performance: this.state.clickedItem.performance
    };

    // using for-of rather than forEach so that break syntax can be employed
    for (let target of targets) {
      if (target.id === editedItem.id) {
        targets.splice(targets.indexOf(target), 1, editedItem);
      } else if (target.id !== editedItem.id && !this.state.isEditing) {
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
        targets: targets,
        clickedItem: editedItem
      },
      this.closeModal()
    );
  }

  // remove list item on click
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

  // reset modal variables
  closeModal() {
    this.setState({
      isEditing: false,
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

  //Location autocomplete methods

  // react-places-autocomplete select function
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  // editing sorting criteria and order
  handleSortSelect(event) {
    let data = this.handleSort(companies.data, event.target.value);
    this.setState({
      targets: data,
      sorting: event.target.value,
      order: this.state.order === '' ? 'Ascending' : this.state.order
    });
  }

  handleOrderSelect(event) {
    let data;
    if (this.state.sorting) {
      data = this.handleSort(
        companies.data,
        this.state.sorting,
        event.target.value
      );
    } else {
      data = this.handleSort(
        companies.data,
        'Alphabetical',
        event.target.value
      );
    }
    this.setState({
      targets: data,
      sorting: this.state.sorting === '' ? 'Alphabetical' : this.state.sorting,
      order: event.target.value
    });
  }

  loadJS(src) {
    var ref = window.document.getElementsByTagName('script')[0];
    var script = window.document.createElement('script');
    script.src = src;
    script.async = true;
    script.defer = true;
    ref.parentNode.insertBefore(script, ref);
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
            sorting={this.state.sorting}
            order={this.state.order}
            handleTargetClick={this.handleTargetClick.bind(this)}
            handleEditClick={this.handleEditClick.bind(this)}
            closeModal={this.closeModal.bind(this)}
            formValues={this.state.formValues}
            handleInputChange={this.handleInputChange.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}
            handleItemDelete={this.handleItemDelete.bind(this)}
            handleTargetShrink={this.handleTargetShrink.bind(this)}
            handleSelect={this.handleSelect.bind(this)}
            handleSortSelect={this.handleSortSelect.bind(this)}
            handleOrderSelect={this.handleOrderSelect.bind(this)}
          />
        </div>
      </Router>
    );
  }
}
