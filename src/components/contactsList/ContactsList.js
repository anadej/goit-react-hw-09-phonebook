import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactsListStyled } from "./ContactsListStyled";
import { deleteContactOperation } from "../../redux/contacts/contactsOperations";
import { getFilteredContacts } from "../../redux/contacts/contactsSelectors";
import sprite from "../../icons/project_sprites.svg";
import Table from "react-bootstrap/Table";

const ContactsList = () => {
  let i = 0;

  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  console.log("contacts", contacts);
  return (
    <ContactsListStyled>
      <Table bordered striped hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{++i}</td>
              <td>{contact.name}</td>
              <td>{contact.number}</td>
              <td>
                <button
                  className="contactDeleteBtn"
                  type="button"
                  onClick={() => dispatch(deleteContactOperation(contact.id))}
                >
                  <svg className="icon-user">
                    <use href={sprite + "#icon-bin"} />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ContactsListStyled>
  );
};

export default ContactsList;
