import React from 'react';
import ExtendedInfo from './ExtendedInfo';
import Performance from './Performance';
import { Route, Link } from 'react-router-dom';

const statusColor = status => {
  let bgColor;
  switch (status) {
    case 'Approved':
      bgColor = 'rgba(0, 128, 0, 0.7)';
      break;

    case 'Declined':
      bgColor = 'rgba(255, 0, 0, 0.7)';
      break;

    default:
      bgColor = 'rgba(0, 140, 255, 0.7)';
      break;
  }

  return bgColor;
};

const Target = props => {
  return (
    <li
      onClick={() => {
        props.handleTargetClick(props.item, props.index);
      }}
      className={
        props.isClicked && props.item.id === props.clickedItem.id
          ? 'target expandedLi'
          : 'target standardLi'
      }
    >
      <div className="basicInfo">
        <h3>
          {props.item.company_name}
          <span style={{ backgroundColor: statusColor(props.item.status) }}>
            {props.item.status}
          </span>
        </h3>
        <div>
          <a href={`tel:${props.item.company_phone_number}`}>
            <i className="icons fas fa-mobile-alt" />
            {props.item.company_phone_number}
          </a>
        </div>
        <div>
          <i className="icons fas fa-search-location" />
          {props.item.company_address}
        </div>
      </div>
      <ul className="infoLinks">
        <li>
          <Link to="/information">Information</Link>
        </li>
        <li>
          <Link to="/performance">Performance</Link>
        </li>
      </ul>
      <Route
        path="/information"
        render={routeProps => {
          return <ExtendedInfo item={props.item} {...props} />;
        }}
      />
      <Route
        path="/performance"
        render={routeProps => {
          return <Performance item={props.item} {...props} />;
        }}
      />
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
    </li>
  );
};

export default Target;
