import React from "react";

export function ChildComponent(props) {
    return (
        <button
            onClick={() => props.clickHandler('Child')}>
            Inform parent
        </button>
    );
}