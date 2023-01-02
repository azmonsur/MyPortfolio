import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/store";

import NoContent from "../NoContent";

import "./styles.css";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const { dispatch, getContacts } = useContext(GlobalContext);

  const fetchContacts = async () => {
    const contacts = await getContacts()(dispatch);

    setContacts(contacts);
  };

  useEffect(() => {
    fetchContacts();
  }, []);
  return (
    <div className="contacts-wrapper">
      <div className="section-main-header">Contact Me</div>
      <div className="section-description">Connect with me</div>
      <div className="section-main-content">
        {contacts.length === 0 ? (
          <NoContent message="No contacts" />
        ) : (
          <div className="each-category">
            <div className="each-card-wrapper">
              <div className="contact-list">
                {contacts.map((contact, key) => (
                  <div key={key}>{contact.name}</div>
                ))}
              </div>

              <div className="send-message">send message</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacts;
