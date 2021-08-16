import axios from "axios";

const baseURL = "https://phonebook-d66d1-default-rtdb.firebaseio.com";

export const getContacts = async () => {
  try {
    const response = await axios.get(baseURL + "/contacts.json");
    const res = Object.keys(response.data).map((item) => ({
      id: item,
      ...response.data[item],
    }));
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const addContact = async (contact) => {
  try {
    const response = await axios.post(baseURL + "/contacts.json", contact);
    return { ...contact, id: response.data.name };
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteContact = async (id) => {
  try {
    await axios.delete(baseURL + `/contacts/${id}.json`);
  } catch (error) {
    throw new Error(error);
  }
};
