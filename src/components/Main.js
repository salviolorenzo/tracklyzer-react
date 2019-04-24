import React from 'react';
import Target from './Target';

const Main = props => {
  return (
    <div>
      <ul>
        {props.targets.map((item, index) => {
          return (
            <Target
              company_name={item.company_name}
              company_phone_number={item.company_phone_number}
              company_address={item.company_address}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Main;
