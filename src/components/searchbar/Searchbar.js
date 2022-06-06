import React from 'react';
import './Searchbar.css';
import SearchIcon from '@mui/icons-material/Search';

export default function Searchbar() {
  return (
    <div className="searchbar">
      <label>
          <SearchIcon color="primary" fontSize="medium"/>
      </label>
      <input placeholder="Suche" />
    </div>
  );
}
