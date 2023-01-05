import React, { useContext, useState, useEffect, useRef } from "react";
import { GlobalContext } from "../../context/store";
import { BsWhatsapp } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import Message from "../Message";
import emailjs from "emailjs-com";

import NoContent from "../NoContent";

import "./styles.css";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { dispatch, getContacts } = useContext(GlobalContext);

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const fetchContacts = async () => {
    const contacts = await getContacts()(dispatch);

    setContacts(contacts);
  };

  const getContactsIcon = (icon) => {
    switch (icon.toLowerCase()) {
      case "email":
        return <MdOutlineEmail />;
      case "whatsapp":
        return <BsWhatsapp />;
      case "messanger":
        return <BsMessenger />;
      default:
        return null;
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    const [name, email, message] = [
      nameRef.current.value,
      emailRef.current.value,
      messageRef.current.value,
    ];
    if (!name || !email || !message) {
      return setError("All fields are required");
    }

    try {
      const response = await emailjs.send(
        "service_i3gw6l5",
        "template_ds3oysl",
        {
          name: name,
          email: email,
          message: message,
          subject: "Message From My Portfolio",
        },
        "EfRFEi3CdjXgrPqx-"
      );

      //

      if (response && response.status === 200) {
        setSuccess("Message sent successfully");
        e.target.reset();
      } else {
        setError("Something went wrong");
      }
    } catch (error) {
      setError("Something went wrong");
    }

    setTimeout(() => {
      setError(false);
      setSuccess(false);
    }, 8000);
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
                  <div href="#" key={key}>
                    <span className="icon">
                      {getContactsIcon(contact.name)}
                    </span>
                    <span>{contact.name}</span>
                    <span>{contact.address}</span>
                    <a
                      href={`${
                        contact.name.toLowerCase() === "email" ? "mailto:" : ""
                      }${contact.link}`}
                      target="_blank"
                    >
                      Send Message
                    </a>
                  </div>
                ))}
              </div>

              <form className="send-message" onSubmit={handleSendMessage}>
                <div className="info">
                  {error && <Message danger message={error} />}

                  {success && <Message success message={success} />}
                </div>

                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    required
                    ref={nameRef}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name=""
                    placeholder="Your Email"
                    required
                    ref={emailRef}
                  />
                </div>

                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Your Message..."
                  required
                  ref={messageRef}
                ></textarea>

                <button>Send Message</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacts;
