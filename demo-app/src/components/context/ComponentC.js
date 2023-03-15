import { Component } from "react";
import { UserConsumer } from "./UserContext";

export class ComponentC extends Component {
    render() {
        return <UserConsumer>
            {(username) => <div>context value = {username}</div>}
        </UserConsumer>
    }
}