import {
  addContact,
  deleteContact,
  getContacts,
} from "../../services/contacts_api";

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
} from "./contactsAction";

export const getContactsOperation = () => async (dispatch, getState) => {
  try {
    dispatch(getContactsRequest());
    const res = await getContacts();
    dispatch(getContactsSuccess(res));
  } catch (error) {
    dispatch(getContactsError(error.message));
  }
};

export const addContactOperation = (user) => async (dispatch, getState) => {
  try {
    dispatch(addContactsRequest());
    //запрос к backend на добавление одного контакта, возвращает id
    const res = await addContact(user);
    //обоновляем state c id контакта, полученного из базы
    dispatch(addContactsSuccess({ ...res }));
  } catch (error) {
    dispatch(addContactsError(error.message));
  }
};

export const deleteContactOperation = (id) => async (dispatch, getState) => {
  try {
    dispatch(deleteContactsRequest());
    await deleteContact(id);
    dispatch(deleteContactsSuccess(id));
  } catch (error) {
    dispatch(deleteContactsError(error.message));
  }
};
