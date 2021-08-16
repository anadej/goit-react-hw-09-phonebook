// ==================== toolkit ==========================

import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { signOutUser } from "../auth/authAction";
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  setFilter,
} from "./contactsAction";

const itemsReducer = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => payload,

  [addContactsSuccess]: (state, action) => [...state, action.payload],

  [deleteContactsSuccess]: (state, action) =>
    state.filter((item) => item.id !== action.payload),

  [signOutUser]: () => [],
});

const isLoadingReducer = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
  [signOutUser]: () => false,
});

const errorReducer = createReducer("", {
  [getContactsRequest]: () => "",
  [getContactsError]: (_, { payload }) => payload,
  [addContactsRequest]: () => "",
  [addContactsError]: (_, { payload }) => payload,
  [deleteContactsRequest]: () => "",
  [deleteContactsError]: (_, { payload }) => payload,
  [signOutUser]: () => "",
});

const filterReducer = createReducer("", {
  [setFilter]: (_, action) => action.payload,
  [signOutUser]: () => "",
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default contactsReducer;
