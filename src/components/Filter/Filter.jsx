import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filterSlice';
import css from './Filter.module.css';

const filterInputId = nanoid();

const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const setFilter = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <form className={css.filterForm}>
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          className={css.filterInput}
          id={filterInputId}
          type="text"
          value={filterValue}
          onChange={setFilter}
          placeholder="Search"
        />
      </label>
    </form>
  );
};

export default Filter;
