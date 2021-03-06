// Pull in Contacts from Context and loop through them in ContactItem Component
import React, { useContext, Fragment } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";

export const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  console.log(contacts);
  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};
export default Contacts;
