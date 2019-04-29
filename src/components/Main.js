import React from 'react';
import Target from './Target';
import EditForm from './Form';
import SortBy from './SortBy';

const Main = ({
  targets,
  sorting,
  order,
  handleSortSelect,
  isClicked,
  clickedItem,
  isEditing,
  isMobile,
  handleEditClick,
  handleItemDelete,
  handleTargetShrink,
  handleTargetClick,
  address,
  modalClass,
  modalFormClass,
  closeModal,
  formValues,
  handleInputChange,
  handleSubmit,
  handleSelect,
  handleOrderSelect
}) => {
  return (
    <div className="mainContainer">
      <h2>Inbound Leads</h2>
      <SortBy
        sorting={sorting}
        order={order}
        handleSortSelect={handleSortSelect}
        handleOrderSelect={handleOrderSelect}
      />
      <ul>
        {targets.map((item, index) => {
          return (
            <Target
              key={index}
              item={item}
              isClicked={isClicked}
              clickedItem={clickedItem}
              isEditing={isEditing}
              isMobile={isMobile}
              handleEditClick={handleEditClick}
              handleTargetClick={(item, index) => {
                handleTargetClick(item, index);
              }}
              handleItemDelete={handleItemDelete}
              handleTargetShrink={handleTargetShrink}
            />
          );
        })}
      </ul>
      <EditForm
        address={address}
        isEditing={isEditing}
        modalClass={modalClass}
        modalFormClass={modalFormClass}
        closeModal={closeModal}
        formValues={formValues}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        handleSelect={handleSelect}
      />
    </div>
  );
};

export default Main;
