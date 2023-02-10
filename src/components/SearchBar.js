import React from 'react';
import { useDispatch } from 'react-redux';
import { filter } from '../redux/search/search';
import '../css/SearchBar.css';

export default function SearchBar() {
  const dispatch = useDispatch();
  const filterList = (e) => {
    const { value } = e.target;
    dispatch(filter({ value }));
  };
  return (
    <div className="searchBar">
      <input onChange={(e) => { filterList(e); }} type="text" placeholder="Search by name ..." />
    </div>
  );
}
