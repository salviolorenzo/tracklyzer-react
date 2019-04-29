import React from 'react';

const SortBy = ({ sorting, order, handleSortSelect, handleOrderSelect }) => {
  const sortValues = ['Sort By', 'Alphabetical', 'Status'];
  const orderValues = ['Order By', 'Ascending', 'Descending'];
  return (
    <form className="sortBy">
      <select
        value={sorting}
        onChange={event => {
          handleSortSelect(event);
        }}
      >
        {sortValues.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <select
        value={order}
        onChange={event => {
          handleOrderSelect(event);
        }}
      >
        {orderValues.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default SortBy;
