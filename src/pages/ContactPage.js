import React from "react";
import Filter from "../components/filter/Filter";
import ContactsForm from "../components/contactsForm/ContactsForm";
import ContactsList from "../components/contactsList/ContactsList";
import Section from "../components/Section";
import Loader from "react-loader-spinner";

import { ContactPageContainer } from "./ContactPageStyled";
import { connect } from "react-redux";
import { getLoading } from "../redux/contacts/contactsSelectors";

const ContactPage = ({ isLoading }) => {
  return (
    <ContactPageContainer>
      {isLoading && (
        <div className="loader">
          <Loader type="ThreeDots" color="darkblue" height={80} width={80} />
        </div>
      )}
      <Section title={"Add new contact"}>
        <ContactsForm />
      </Section>
      <Section title={"List of contacts"}>
        <Filter />
        <ContactsList />
      </Section>
    </ContactPageContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: getLoading(state),
  };
};

export default connect(mapStateToProps)(ContactPage);
