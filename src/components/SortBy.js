import React from 'react';

const SortBy = ({ sorting, handleSortSelect }) => {
  const values = ['Sort by', 'Alphabetical', 'Status'];
  return (
    <form className="sortBy">
      <select
        value={sorting}
        onChange={event => {
          handleSortSelect(event);
        }}
      >
        {values.map((item, index) => {
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
