import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactsFormStyled } from "./ContactsFormStyled";
import {
  addContactOperation,
  getContactsOperation,
} from "../../redux/contacts/contactsOperations";
import sprite from "../../icons/project_sprites.svg";
import { getAllContacts } from "../../redux/contacts/contactsSelectors";

const groupContacts = ["all", "family", "friends", "work"];

const initialState = {
  name: "",
  number: "",
  group: groupContacts[0],
};

const ContactsForm = () => {
  const [contact, setContact] = useState({ ...initialState });

  const allContacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsOperation());
    // eslint-disable-next-line
  }, []);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    if (
      allContacts.some(
        (item) => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(contact.name + " is already in contact list");
      return contact;
    }
    dispatch(addContactOperation({ ...contact }));
    setContact({ ...initialState });
  };

  return (
    <ContactsFormStyled>
      <form className="phoneForm" onSubmit={onHandleSubmit}>
        <label className="labelForm">
          Name:
          <input
            className="inputForm"
            type="text"
            name="name"
            value={contact.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={onHandleChange}
          />
          <svg className="icon-user">
            <use href={sprite + "#icon-user"} />
          </svg>
        </label>
        <label className="labelForm">
          Number:
          <input
            className="inputForm"
            type="tel"
            name="number"
            value={contact.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={onHandleChange}
          />
          <svg className="icon-user">
            <use href={sprite + "#icon-phone"} />
          </svg>
        </label>
        <label className="labelForm">
          Group:
          <select name="group" className="inputForm" onChange={onHandleChange}>
            {groupContacts.map((item) => (
              <option value={item} key={item}>
                {item.toUpperCase()}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" className="buttonForm">
          Add contact
        </button>
      </form>
    </ContactsFormStyled>
  );
};

export default ContactsForm;
