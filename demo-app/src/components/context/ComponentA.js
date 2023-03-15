import { Component } from "react";
import { ComponentB } from "./ComponentB";
import { UserProvider } from "./UserContext";

export class ComponentA extends Component {
    render() {
        return <UserProvider value="Bob">
            <ComponentB />
        </UserProvider>
    }
}