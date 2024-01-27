import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  getAllContactsThunk,
} from './contactsThunks';

const initialState = {
  contacts: [],
  isLoading: false,
  error: '',
};

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload.message;
};
const handleFulfilled = state => {
  state.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      // .addCase(getAllContactsThunk.pending, state => {
      //   state.isLoading = true;
      //   state.error = '';
      // })
      .addCase(getAllContactsThunk.fulfilled, (state, action) => {
        state.contacts = action.payload;
        // state.isLoading = false;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts = [...state.contacts, action.payload];
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          item => item.id !== action.payload.id
        );
      })
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('/fulfilled'), handlePending);
  },
});

export const contactsReducer = contactsSlice.reducer;
