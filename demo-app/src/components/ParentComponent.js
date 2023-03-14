import React, { Component } from "react";
import { ChildComponent } from './ChildFunctComponent'


export class ParentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            componentName: 'Parent'
        }

    }

    parentEvent = (senderName) => alert(`Hello ${this.state.componentName} from ${senderName}`);

    render() {
        return <ChildComponent
            clickHandler={this.parentEvent}>
        </ChildComponent>
    }

}