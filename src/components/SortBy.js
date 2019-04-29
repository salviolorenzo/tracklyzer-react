import React from 'react';

const SortBy = props => {
  const values = ['Sort by', 'Alphabetical', 'Status'];
  return (
    <form className="sortBy">
      <select
        value={props.sorting}
        onChange={event => {
          props.handleSortSelect(event);
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
