import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {

    setContactsFilter(state, action) {
      return (state = action.payload);
      
    },
  },
});

export const { reducer: filtersReducer, actions: filtersActions } = filtersSlice;

export const { setContactsFilter } = filtersActions;