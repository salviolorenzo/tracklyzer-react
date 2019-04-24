import React from 'react';
import Target from './Target';

const Main = props => {
  return (
    <div>
      <ul>
        {props.targets.map((item, index) => {
          return (
            <Target
              key={index}
              item={item}
              isClicked={props.isClicked}
              clickedItem={props.clickedItem}
              company_name={item.company_name}
              company_phone_number={item.company_phone_number}
              company_address={item.company_address}
              handleTargetClick={(item, index) => {
                props.handleTargetClick(item, index);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Main;
