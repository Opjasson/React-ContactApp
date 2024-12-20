import React from "react";
import { getData } from "../Utils/js/data";
import ContactList from "./ContactList";
import FormClass from "./FormClass";
import ContactInput from "./ContactInput";

class ContactApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: getData(),
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddContactHandler = this.onAddContactHandler.bind(this);
    }

    onAddContactHandler({nama, tag}){
        this.setState((prevState) => {
            return {
                contacts : [
                    ...prevState.contacts,
                    {
                        id : +new Date(),
                        name : nama,
                        tag,
                        imageUrl : '/images/default.jpg',
                    }
                ]
            }
        })
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
                <h1>Aplikasi Kontak</h1>
                <h2>Tambah Kontak</h2>
                <ContactInput addContact={this.onAddContactHandler} />
                <h1>Daftar Kontak</h1>
                <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
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
