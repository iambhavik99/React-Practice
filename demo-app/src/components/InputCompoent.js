import React, { Component } from "react";

export class InputComponent extends Component {

    constructor() {
        super()
        this.inputRef = React.createRef();
    }

    onInputFocused = () => this.inputRef.current.focus()

    render() {
        return <React.Fragment>
            <input
                ref={this.inputRef} />
        </React.Fragment>
    }


}