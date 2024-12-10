import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts, onDelete }) {
    return (
        <div className="contact-list">
            {contacts.map((contact) => (
                <ContactItem onDelete={onDelete} id={contact.id} key={contact.id} {...contact} />
            ))}
        </div>
    );
}

export default ContactList;
