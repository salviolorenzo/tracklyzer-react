import React from 'react';
import closeButton from '../images/close.png';
import LocationAutoComplete from './LocationAutoComplete';

const EditForm = ({
  formValues,
  modalClass,
  modalFormClass,
  handleSubmit,
  isEditing,
  closeModal,
  handleInputChange,
  handleSelect
}) => {
  console.log(formValues.company_address);
  return (
    <div className={modalClass}>
      <form
        className={modalFormClass}
        onSubmit={event => {
          handleSubmit(event);
        }}
      >
        <div className="modalHeader">
          <h3>{isEditing ? 'Edit Lead' : 'New Lead'}</h3>
          <img onClick={closeModal} src={closeButton} alt="Close Modal" />
        </div>
        <label className="sectionLabel">Company Name</label>
        <input
          type="text"
          name="company_name"
          value={formValues.company_name}
          placeholder=""
          onChange={event => {
            handleInputChange(event);
          }}
        />
        <label className="sectionLabel">Status</label>
        <select
          name="status"
          value={formValues.status}
          placeholder="Status"
          onChange={event => {
            handleInputChange(event);
          }}
        >
          <option value="" />
          <option value="Approved">Approved</option>
          <option value="Pending Approval">Pending Approval</option>
          <option value="Researching">Researching</option>
          <option value="Declined">Declined</option>
        </select>
        <label className="sectionLabel">Address</label>
        <LocationAutoComplete
          type="text"
          company_address={formValues.company_address}
          handleInputChange={handleInputChange}
          onSelect={handleSelect}
        />
        <br />
        <label className="sectionLabel">Main Contact</label>
        <label className="subLabel">Name</label>
        <input
          type="text"
          name="main_contact_name"
          value={formValues.main_contact_name}
          placeholder="John Smith"
          onChange={event => {
            handleInputChange(event);
          }}
        />
        <label className="subLabel">Phone</label>
        <input
          type="text"
          name="main_contact_phone"
          value={formValues.main_contact_phone}
          placeholder="(000)-000-0000"
          onChange={event => {
            handleInputChange(event);
          }}
        />
        <label className="subLabel">Email</label>
        <input
          type="text"
          name="main_contact_email"
          value={formValues.main_contact_email}
          placeholder="johnsmith@email.com"
          onChange={event => {
            handleInputChange(event);
          }}
        />
        <br />

        <label className="sectionLabel">Secondary Contact</label>
        <label className="subLabel">Name</label>
        <input
          type="text"
          name="secondary_contact_name"
          value={formValues.secondary_contact_name}
          placeholder="John Smith"
          onChange={event => {
            handleInputChange(event);
          }}
        />
        <label className="subLabel">Phone</label>
        <input
          type="text"
          name="secondary_contact_phone"
          value={formValues.secondary_contact_phone}
          placeholder="(000)-000-0000"
          onChange={event => {
            handleInputChange(event);
          }}
        />
        <label className="subLabel">Email</label>
        <input
          type="text"
          name="secondary_contact_email"
          value={formValues.secondary_contact_email}
          placeholder="johnsmith@email.com"
          onChange={event => {
            handleInputChange(event);
          }}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditForm;
