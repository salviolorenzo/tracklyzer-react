import React from 'react';
import ExtendedInfo from './ExtendedInfo';
import Performance from './Performance';
import { Route, NavLink } from 'react-router-dom';
import SwipeableRoutes from 'react-swipeable-routes';

const targetDisplay = (
  props,
  { isMobile, handleClickedLink, item, handleEditClick, handleItemDelete }
) => {
  const activeLinkStyle = {
    backgroundColor: 'rgba(0, 140, 255, 0.7)',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '20px'
  };

  if (isMobile) {
    return (
      <div className="infoContainer">
        <ul className="infoLinks">
          <li>
            <NavLink
              onClick={handleClickedLink}
              to="/information"
              activeStyle={activeLinkStyle}
            >
              Information
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleClickedLink}
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
                  item={item}
                  handleEditClick={handleEditClick}
                  handleItemDelete={handleItemDelete}
                  {...props}
                />
              );
            }}
          />
          <Route
            exact
            path="/performance"
            render={routeProps => {
              return <Performance item={item} {...props} />;
            }}
          />
        </SwipeableRoutes>
      </div>
    );
  } else {
    return (
      <div className="infoContainer">
        <ExtendedInfo
          item={item}
          handleEditClick={handleEditClick}
          handleItemDelete={handleItemDelete}
        />
        <Performance item={item} />
      </div>
    );
  }
};

export default targetDisplay;
