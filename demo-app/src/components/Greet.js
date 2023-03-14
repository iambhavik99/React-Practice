import React from "react";

export function Greet(props) {
    return <div>
        <div>Hello {props.name}</div>
        {props.children}
    </div>;
}

