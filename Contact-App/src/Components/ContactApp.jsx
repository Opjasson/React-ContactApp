import React from "react";
import { getData } from "../Utils/js/data";
import ContactList from "./ContactList";
import FormClass from "./FormClass";

class ContactApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: getData(),
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const contacts = this.state.contacts.filter(
            (contact) => contact.id !== id
        );
        this.setState({ contacts });
    }
    render() {
        return (
            <div className="contact-app">
                <h1>Daftar Kontak</h1>
                <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
                <FormClass />
            </div>
        );
    }
}

// function ContactApp() {
//     const contacts = getData();
//     return (
//         <div className="contact-app">
//             <h1>Daftar Kontak</h1>
//             <ContactList contacts={contacts} />
//         </div>
//     );
// }

export default ContactApp;
