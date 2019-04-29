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

    case 'Researching':
      bgColor = 'rgba(14, 98, 167, 0.7)';
      break;

    case 'Pending Approval':
      bgColor = 'rgba(0, 140, 255, 0.7)';
      break;

    default:
      bgColor = 'rgba(0, 140, 255, 0.7)';
      break;
  }

  return bgColor;
};

const Target = ({
  handleTargetClick,
  index,
  isClicked,
  clickedItem,
  item,
  isMobile,
  handleEditClick,
  handleItemDelete,
  handleTargetShrink
}) => {
  return (
    <li
      onClick={() => {
        handleTargetClick(item, index);
      }}
      className={
        isClicked && item.id === clickedItem.id
          ? 'target expandedLi'
          : 'target standardLi'
      }
    >
      <div className="basicInfo">
        <h3>
          <span className="infoHeading">{item.company_name}</span>
          <span style={{ backgroundColor: statusColor(item.status) }}>
            {item.status}
          </span>
        </h3>
        <div>
          <a href={`tel:${item.company_phone_number}`}>
            <i className="icons fas fa-mobile-alt" />
            {item.company_phone_number}
          </a>
        </div>
        <div>
          <i className="icons fas fa-search-location" />
          {item.company_address}
        </div>
      </div>
      <TargetDisplay
        item={item}
        isMobile={isMobile}
        handleEditClick={handleEditClick}
        handleItemDelete={handleItemDelete}
      />
      <div className="shrinkButton" onClick={() => handleTargetShrink(item)}>
        <i className="fas fa-chevron-up" />
      </div>
    </li>
  );
};

export default Target;
