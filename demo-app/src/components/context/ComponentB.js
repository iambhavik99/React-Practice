import { Component } from "react";
import { ComponentC } from "./ComponentC";

export class ComponentB extends Component {
    render() {
        return <ComponentC/>
    }
}