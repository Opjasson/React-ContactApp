import React, { Component } from "react";

export default class FormClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            gender: ""
        };

        this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
        this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
        this.onGenderChangeHandler = this.onGenderChangeHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onNameChangeHandler(event) {
        this.setState(() => {
            return {
                name : event.target.value
            }
        })
    }

    onEmailChangeHandler(event) {
         this.setState(() => {
           return {
                email: event.target.value,
            };
        });
    }

    onGenderChangeHandler(event) {
        this.setState(() => {
            return {
                gender : event.target.value
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        
        const message = `
            Name : ${this.state.name}
            Email : ${this.state.email}
            Gender : ${this.state.gender}
        `

        return alert(message);
    }

    render() {
        return (
            <div>
                <form action="">
                    <div>
                        <h1> Register Form</h1>
                        <form>
                            <label htmlFor="name">Name: </label>
                            <input id="name" type="text" value={this.state.name} onChange={this.onNameChangeHandler} />
                            <br />
                            <label htmlFor="email">Email: </label>
                            <input id="email" type="text" value={this.state.email} onChange={this.onEmailChangeHandler}/>
                            <br />
                            <label htmlFor="gender">Gender: </label>
                            <select id="gender" value={this.state.gender} onChange={this.onGenderChangeHandler}>
                                <option selected>Jenis kelamin</option>
                                <option value="Man">Man</option>
                                <option value="Woman">Woman</option>
                            </select>
                            <br />
                            <button type="submit" onClick={this.onSubmitEventHandler}>submit</button>
                        </form>
                    </div>
                </form>
            </div>
        );
    }
}
