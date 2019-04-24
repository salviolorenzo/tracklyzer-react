import React from 'react';

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
      <div>{props.company_name}</div>
      <div>{props.company_phone_number}</div>
      <div>{props.company_address}</div>
    </li>
  );
};

export default Target;
