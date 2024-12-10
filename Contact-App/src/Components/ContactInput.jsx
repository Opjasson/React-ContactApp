import React, { Component } from "react";

export default class ContactInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nama: "",
            tag: "",
        };

        this.onNameChangeHandle = this.onNameChangeHandle.bind(this);
        this.onTagChangeHandle = this.onTagChangeHandle.bind(this);
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
    }

    onNameChangeHandle(event) {
        this.setState(() => {
            return {
                nama: event.target.value,
            };
        });
    }

    onTagChangeHandle(event) {
        this.setState(() => {
            return {
                tag: event.target.value,
            };
        });
    }

    onSubmitHandle(event) {
        event.preventDefault()
        this.props.addContact(this.state)
    }

    render() {
        return (
            <div>
                <form className="contact-input" action="">
                    <input
                        type="text"
                        placeholder="nama"
                        value={this.state.nama}
                        onChange={this.onNameChangeHandle}
                    />
                    <input
                        type="text"
                        placeholder="tag"
                        value={this.state.tag}
                        onChange={this.onTagChangeHandle}
                    />
                    <button onClick={this.onSubmitHandle} type="submit">Kirim</button>
                </form>
            </div>
        );
    }
}
