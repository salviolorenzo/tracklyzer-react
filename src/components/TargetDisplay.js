import React from 'react';
import ExtendedInfo from './ExtendedInfo';
import Performance from './Performance';
import { Route, NavLink, Redirect } from 'react-router-dom';
import SwipeableRoutes from 'react-swipeable-routes';

const targetDisplay = props => {
  const activeLinkStyle = {
    backgroundColor: 'rgba(0, 140, 255, 0.7)',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '20px'
  };

  if (props.isMobile) {
    return (
      <div className="infoContainer">
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
        <SwipeableRoutes>
          <Route
            exact
            path="/"
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
            exact
            path="/performance"
            render={routeProps => {
              return <Performance item={props.item} {...props} />;
            }}
          />
        </SwipeableRoutes>
      </div>
    );
  } else {
    return (
      <div className="infoContainer">
        <ExtendedInfo
          item={props.item}
          handleEditClick={props.handleEditClick}
          handleItemDelete={props.handleItemDelete}
        />
        <Performance item={props.item} />
      </div>
    );
  }
};

export default targetDisplay;
