import React from 'react';

const ExtendedInfo = props => {
  return (
    <div className="extendedInfo">
      <div>
        <h4>Main Contact</h4>
        <div>
          {props.item.main_contact_name !== ''
            ? props.item.main_contact_name
            : 'N/A'}
        </div>
        <div>
          <a href={`tel:${props.item.main_contact_phone}`}>
            <i className="icons fas fa-mobile-alt" />
            {props.item.main_contact_phone !== ''
              ? props.item.main_contact_phone
              : 'N/A'}
          </a>
        </div>
        <div>
          <a href={`mailto:${props.item.main_contact_email}`}>
            <i className="icons fas fa-at" />
            {props.item.main_contact_email !== ''
              ? props.item.main_contact_email
              : 'N/A'}
          </a>
        </div>
      </div>
      <div>
        <h4>Secondary Contact</h4>
        <div>
          {props.item.secondary_contact_name !== ''
            ? props.item.secondary_contact_name
            : 'N/A'}
        </div>
        <div>
          <a href={`tel:${props.item.main_contact_phone}`}>
            <i className="icons fas fa-mobile-alt" />
            {props.item.secondary_contact_phone}
          </a>
        </div>
        <div>
          <a href={`mailto:${props.item.secondary_contact_email}`}>
            <i className="icons fas fa-at" />
            {props.item.secondary_contact_email !== ''
              ? props.item.secondary_contact_email
              : 'N/A'}
          </a>
        </div>
      </div>
      <div className="buttonContainer">
        <button
          onClick={event => {
            props.handleEditClick(event);
          }}
          type="button"
          className="btn editBtn"
        >
          Edit
        </button>
        <button
          onClick={event => {
            props.handleItemDelete(event);
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
