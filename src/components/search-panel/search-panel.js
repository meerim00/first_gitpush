import React from 'react';

import './search-panel.css';

const SearchPanel = ({onSearch}) => {
  return (
    <input type="text"
    onInput={onSearch}
    className="form-control search-input"
    placeholder="type to search" />
  );
};

export default SearchPanel;
