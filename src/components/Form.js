import React from 'react';
import closeButton from '../images/close.png';

const EditForm = props => {
  return (
    <div className={props.modalClass}>
      <form
        className={props.modalFormClass}
        onSubmit={event => {
          props.handleEditSubmit(event);
        }}
      >
        <div className="modalHeader">
          <h3>{props.isEditing ? 'Edit Lead' : 'New Lead'}</h3>
          <img onClick={props.closeModal} src={closeButton} alt="Close Modal" />
        </div>
        <label className="sectionLabel">Company Name</label>
        <input
          type="text"
          name="company_name"
          value={props.formValues.company_name}
          placeholder=""
          onChange={event => {
            props.handleInputChange(event);
          }}
        />
        <label className="sectionLabel">Status</label>
        <select
          name="status"
          value={props.formValues.status}
          placeholder="Status"
          onChange={event => {
            props.handleInputChange(event);
          }}
        >
          <option value="" />
          <option value="Approved">Approved</option>
          <option value="Pending Approval">Pending Approval</option>
          <option value="Researching">Researching</option>
          <option value="Declined">Declined</option>
        </select>
        <label className="sectionLabel">Address</label>
        <input
          type="text"
          name="company_address"
          value={props.formValues.company_address}
          placeholder="1 Cedar Hill Dr, Atlanta, GA"
          onChange={event => {
            props.handleInputChange(event);
          }}
        />
        <br />
        <label className="sectionLabel">Main Contact</label>
        <label className="subLabel">Name</label>
        <input
          type="text"
          name="main_contact_name"
          value={props.formValues.main_contact_name}
          placeholder="John Smith"
          onChange={event => {
            props.handleInputChange(event);
          }}
        />
        <label className="subLabel">Phone</label>
        <input
          type="text"
          name="main_contact_phone"
          value={props.formValues.main_contact_phone}
          placeholder="(000)-000-0000"
          onChange={event => {
            props.handleInputChange(event);
          }}
        />
        <label className="subLabel">Email</label>
        <input
          type="text"
          name="main_contact_email"
          value={props.formValues.main_contact_email}
          placeholder="johnsmith@email.com"
          onChange={event => {
            props.handleInputChange(event);
          }}
        />
        <br />

        <label className="sectionLabel">Secondary Contact</label>
        <label className="subLabel">Name</label>
        <input
          type="text"
          name="secondary_contact_name"
          value={props.formValues.secondary_contact_name}
          placeholder="John Smith"
          onChange={event => {
            props.handleInputChange(event);
          }}
        />
        <label className="subLabel">Phone</label>
        <input
          type="text"
          name="secondary_contact_phone"
          value={props.formValues.secondary_contact_phone}
          placeholder="(000)-000-0000"
          onChange={event => {
            props.handleInputChange(event);
          }}
        />
        <label className="subLabel">Email</label>
        <input
          type="text"
          name="secondary_contact_email"
          value={props.formValues.secondary_contact_email}
          placeholder="johnsmith@email.com"
          onChange={event => {
            props.handleInputChange(event);
          }}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditForm;
