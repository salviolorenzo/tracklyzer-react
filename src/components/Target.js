import React from 'react';
import ExtendedInfo from './ExtendedInfo';
import Performance from './Performance';
import { Route, NavLink, Redirect } from 'react-router-dom';

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
  const activeLinkStyle = {
    backgroundColor: 'rgba(0, 140, 255, 0.7)',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '20px'
  };

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
          <NavLink
            onClick={props.handleClickedLink}
            to="/information"
            activeStyle={activeLinkStyle}
          >
            Information
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={props.handleClickedLink}
            to="/performance"
            activeStyle={activeLinkStyle}
          >
            Performance
          </NavLink>
        </li>
      </ul>
      <Route
        path="/information"
        render={routeProps => {
          return (
            <ExtendedInfo
              item={props.item}
              handleEditClick={props.handleEditClick}
              handleItemDelete={props.handleItemDelete}
              {...props}
            />
          );
        }}
      />

      <Route
        path="/performance"
        render={routeProps => {
          return <Performance item={props.item} {...props} />;
        }}
      />

      <div
        className="shrinkButton"
        onClick={() => props.handleTargetShrink(props.item)}
      >
        <i className="fas fa-chevron-up" />
      </div>
    </li>
  );
};

export default Target;
