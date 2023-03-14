import React, { Component } from "react";
import { InputComponent } from "./InputCompoent";

export class FormComponent extends Component {
    constructor() {
        super()
        this.state = {
            username: ''
        };
        this.parentRef = React.createRef();
    }

    onUsernameChanges = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    onFormSubmit = () => alert(this.state.username);

    focusHandler = () => this.parentRef.current.onInputFocused();


    render() {
        return <form onSubmit={this.onFormSubmit}>
            <label>Username</label>
            <input
                value={this.state.username}
                onChange={this.onUsernameChanges} />

            <InputComponent ref={this.parentRef} />
            <button
                type="button"
                onClick={this.focusHandler}>focus</button>

            <button type="submit">Submit</button>
        </form>
    }
}