import { createSelector } from "@reduxjs/toolkit";

export const getLoading = (state) => state.contacts.isLoading;

export const getFilter = (state) => state.contacts.filter;

export const getAllContacts = (state) => state.contacts.items;

// const getFilteredContacts = state => state.contacts.items.filter((contact) =>
//       contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase())

// export const getFilteredContacts = (state) => {
//   const contacts = getAllContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

//мемоизация селектора
export const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
