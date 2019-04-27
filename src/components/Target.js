import React from 'react';
import TargetDisplay from './TargetDisplay';

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
          <span className="infoHeading">{props.item.company_name}</span>
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
      <TargetDisplay
        item={props.item}
        isMobile={props.isMobile}
        handleEditClick={props.handleEditClick}
        handleItemDelete={props.handleItemDelete}
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
