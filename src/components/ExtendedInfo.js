import React from 'react';

const ExtendedInfo = ({ item, handleEditClick, handleItemDelete }) => {
  return (
    <div className="extendedInfo">
      <div>
        <h4 className="infoHeading">
          <span>Main Contact</span>
        </h4>
        <div>
          {item.main_contact_name !== '' ? item.main_contact_name : 'N/A'}
        </div>
        <div>
          <a href={`tel:${item.main_contact_phone}`}>
            <i className="icons fas fa-mobile-alt" />
            {item.main_contact_phone !== '' ? item.main_contact_phone : 'N/A'}
          </a>
        </div>
        <div>
          <a href={`mailto:${item.main_contact_email}`}>
            <i className="icons fas fa-at" />
            {item.main_contact_email !== '' ? item.main_contact_email : 'N/A'}
          </a>
        </div>
      </div>
      <div>
        <h4 className="infoHeading">
          <span>Secondary Contact</span>
        </h4>
        <div>
          {item.secondary_contact_name !== ''
            ? item.secondary_contact_name
            : 'N/A'}
        </div>
        <div>
          <a href={`tel:${item.main_contact_phone}`}>
            <i className="icons fas fa-mobile-alt" />
            {item.secondary_contact_phone}
          </a>
        </div>
        <div>
          <a href={`mailto:${item.secondary_contact_email}`}>
            <i className="icons fas fa-at" />
            {item.secondary_contact_email !== ''
              ? item.secondary_contact_email
              : 'N/A'}
          </a>
        </div>
      </div>
      <div className="buttonContainer">
        <button
          onClick={event => {
            handleEditClick(event);
          }}
          type="button"
          className="btn editBtn"
        >
          Edit
        </button>
        <button
          onClick={event => {
            handleItemDelete(event);
          }}
          type="button"
          className="btn delBtn"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExtendedInfo;
