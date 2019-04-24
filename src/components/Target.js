import React from 'react';

const Target = props => {
  return (
    <li>
      <div>{props.company_name}</div>
      <div>{props.company_phone_number}</div>
      <div>{props.company_address}</div>
    </li>
  );
};

export default Target;
