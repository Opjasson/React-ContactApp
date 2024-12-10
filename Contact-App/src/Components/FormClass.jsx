import React, { Component } from "react";

export default class FormClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
        };

        this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    }
    onEmailChangeHandler(event) {
        this.setState(() => {
            return {
                email: event.target.value,
            };
        });
    }

    render() {
        return (
            <div>
                <form action="">
                    <label htmlFor="">Email</label>
                    <input type="text" value={this.state.email} onChange={this.onEmailChangeHandler} />
                </form>
            </div>
        );
    }
}
