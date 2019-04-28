import React from 'react';
import Target from './Target';
import EditForm from './Form';

const Main = props => {
  return (
    <div className="mainContainer">
      <h2>Inbound Leads</h2>
      <ul>
        {props.targets.map((item, index) => {
          return (
            <Target
              key={index}
              item={item}
              isClicked={props.isClicked}
              clickedItem={props.clickedItem}
              isEditing={props.isEditing}
              isMobile={props.isMobile}
              handleEditClick={props.handleEditClick}
              handleTargetClick={(item, index) => {
                props.handleTargetClick(item, index);
              }}
              handleItemDelete={props.handleItemDelete}
              handleTargetShrink={props.handleTargetShrink}
            />
          );
        })}
      </ul>
      <EditForm
        isEditing={props.isEditing}
        modalClass={props.modalClass}
        modalFormClass={props.modalFormClass}
        closeModal={props.closeModal}
        formValues={props.formValues}
        handleInputChange={props.handleInputChange}
        handleSubmit={props.handleSubmit}
        handleSelect={props.handleSelect}
      />
    </div>
  );
};

export default Main;
